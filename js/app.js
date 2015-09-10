(function(){
    var app=angular.module("reqPerApp",["ngRoute"]);
    app.config(function($routeProvider){
        $routeProvider
            .when("/personas",{
                templateUrl:"client/personas",
                controller:"personasController",
                controllerAs:"personas"
            })
            .when("requerimientos",{
                templateUrl: "client/requerimientos",
                controller: "requerimientosController",
                controllerAs: "requerimientos"
            })
            .otherwise({
                redirectTo: "/index"
            });
    });
    app.controller("personasController", function () {
        var vm = this;

       
        vm.lista = [];
        vm.parametros={};
        vm.parametros.estado="vacio";
        vm.parametros.dni=71184210;
        vm.datos={};
        vm.operaciones={
            traer:function(operacion){
                var operaciones={
                    load:     { conDni:true },
                    anterior: { conDni:true },
                    siguiente:{ conDni:true }
                };
                vm.parametros.estado="loading";
                var parametrosLlamada={
                    url:'/persona/' + operacion,
                    data:{}
                }
                if((operaciones[operacion]||{}).conDni){
                    parametrosLlamada.data.dni = vm.parametros.dni;
                }
                AjaxBestPromise.get(parametrosLlamada).then(function(result){
                    vm.parametros.estado="ok";
                    vm.datos=JSON.parse(result);
                    vm.campos=Object.keys(vm.datos);
                }).catch(function(err){
                    vm.parametros.estado="error";
                    vm.parametros.mensaje_error=err.message;
                }).then(function(){
                    $scope.$apply();
                });                
            };
            
        }
        
        // obtener lista desde JSON
        /*var url = "data/eah2013.json";
        $http.get(url).then(function (resp) {
            vm.lista = resp.data;
        });*/
        encuestasService.getEncuestas().then(function (data) {
            vm.lista = data;
        });
    });
    
})();