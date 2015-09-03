
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
    })

})();