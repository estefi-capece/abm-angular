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
var fs = require('fs-promise');

loginPlus.validExts=[
    'html',
    'jpg','png','gif',
    'css','js','manifest'];
    
loginPlus.secret = 'keyboard cat';

loginPlus.savedUser = {};

loginPlus.init = function init(app,opts){
    opts = opts || {};
    opts.unloggedPath = opts.unloggedPath || __dirname;
    app.use('/',extensionServeStatic(opts.unloggedPath, {
        index: [''], 
        extensions:[''], 
        staticExtensions:loginPlus.validExts
    }));

    app.use(session({ secret: loginPlus.secret, resave:false, saveUninitialized:true }));
    app.use(passport.initialize());    
    app.use(passport.session({ secret: loginPlus.secret }));

    var fileNameLogin=opts.unloggedPath+'\\login.html';
    
    fs.exists(fileNameLogin).then(function(exists){
        
        if(!exists){
            console.log('ERR! login-plus init fail "'+fileNameLogin+'" does not exists');
        }
    });
        
    app.get('/login',function(req,res){
       res.redirect('/login.html');
    });

    app.post('/login',
       passport.authenticate('local',{ 
            successRedirect: '/index.html',
//            successRedirect: '/client/personas.html',
//            successRedirect: '/personas.html#/personas',
            failureRedirect: '/login',
            failureFlash: true }
            )
    );

    passport.serializeUser(function(user, done) {
        loginPlus.savedUser[user.username] = user;
//        console.log('SERIALIZE',loginPlus.savedUser,user);
        done(null, user.username);
    });

    passport.deserializeUser(function(username, done) {
//        console.log('deSERIALIZE',loginPlus.savedUser,username);
        done(null, loginPlus.savedUser[username]);
    });

    app.use(ensureLoggedIn('/login.html'));

};

loginPlus.setValidator = function setValidator(validatorStrategy){
    passport.use(new LocalStrategy(validatorStrategy));
};

module.exports = loginPlus;