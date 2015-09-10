
(function(){
    
    var app = angular.module("reqPerApp", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/personas",{
                templateUrl:"views/personas",
                controller:"personasController",
                controllerAs:"personas"
            })
            .when("requerimientos",{
                templateUrl: "views/requerimientos",
                controller: "requerimientosController",
                controllerAs: "requerimientos"
            })
            .otherwise({
                redirectTo: "/index"
            });
    });
    app.controller("personasController",function(){
        var vm=this;
        
    });
    app.controller("ErroresCtrl",function(){
        var vm=this;
        vm.message="";
        vm.object="";
        window.addEventListener('error', function(err){
            vm.message=err.message;
            vm.object=JSON.stringify(err);
        });
    })

})();