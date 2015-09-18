"use strict";
/*jshint eqnull:true */
/*jshint globalstrict:true */
/*jshint node:true */

var loginPlus = {};

var MiniTools = require('mini-tools');
var extensionServeStatic = require("extension-serve-static");
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

loginPlus.validExts=[
    'html',
    'jpg','png','gif',
    'css','js','manifest'];
    
loginPlus.secret = 'keyboard cat';

loginPlus.savedUser = {};

loginPlus.init = function init(app,opts){
    opts = opts || {};
    opts.unloggedPath = opts.unloggedPath || __dirname+'/../unlogged';
    app.use('/unlogged',extensionServeStatic(opts.unloggedPath, {
        index: [''], 
        extensions:[''], 
        staticExtensions:loginPlus.validExts
    }));

    app.use(session({ secret: loginPlus.secret, resave:false, saveUninitialized:true }));
    app.use(passport.initialize());
    app.use(passport.session({ secret: loginPlus.secret }));

    app.get('/login',MiniTools.serveJade("unlogged/login",false));

    app.post('/login',
      passport.authenticate('local', { successRedirect: './index',
                                       failureRedirect: './login',
                                       failureFlash: true })
    );

    passport.serializeUser(function(user, done) {
        loginPlus.savedUser[user.username] = user;
        console.log('SERIALIZE',loginPlus.savedUser,user);
        done(null, user.username);
    });

    passport.deserializeUser(function(username, done) {
        console.log('deSERIALIZE',loginPlus.savedUser,username);
        done(null, loginPlus.savedUser[username]);
    });

    app.use(ensureLoggedIn('./login'));
    
};

loginPlus.setValidator = function setValidator(validatorStrategy){
    passport.use(new LocalStrategy(validatorStrategy));
};

module.exports = loginPlus;