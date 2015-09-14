(function(){
    var app=angular.module("reqPerApp",["ngRoute"]);
    app.config(function($routeProvider){
        $routeProvider
            .when("/personas",{
                templateUrl:"client/personas.html",
                controller:"personasController",
                controllerAs:"personas"
            })
            .when("/requerimientos",{
                templateUrl: "client/requerimientos.html",
                controller: "requerimientosController",
                controllerAs: "requerimientos"
            })
            .otherwise({
                redirectTo: "/index"
            })
    });
    app.controller("personasController", function ($scope) {
        var vm = this;
        vm.lista = [];
        vm.parametros={};
        vm.parametros.estado="vacio";
        vm.parametros.dni;/*=71184210*/
        vm.datos={};
        vm.infoCampos={
            dni:{tipoVisual:'dni'},
            seleccionado:{tipoVisual:'check'},
            cod_niv_estud:{tipoVisual:'numerico'}
        };
        vm.operaciones={
            traer:function(operacion){
                var operaciones={
                    load:     { conDni:true },
                    anterior: { conDni:true },
                    siguiente:{ conDni:true },
                    primero:  {conDni:false},
                    ultimo:   {conDni:false}
                };
                vm.parametros.estado="loading";
                var parametrosLlamada={
                    url:'/persona/' + operacion,
                    data:{}
                };
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
                })                
            }
            
        };
        app.controller("requerimientosController", function(){
            var vm=this;
            vm.parametros={};
            vm.parametros.estado="vacio";
            vm.parametros.requerimiento=10;
            vm.operaciones={
                traer: function(operacion){
                    var operacion={
                        load:      {conReq:true},
                        anterior:  {conReq:true},
                        siguiente: {conReq:true},
                        primero:   {conReq:false},
                        ultimo:    {conReq:false}
                    };
                    vm.parametros.estado='loading';
                    var parametrosLlamada={
                        url: '/requerimiento/'+ operacion,
                        data={}
                    };
                    if((operaciones[operacion]||{}).conDni){
                        parametrosLlamada.data.req = vm.parametros.req;
                    }
                    AjaxBestPromise.get(parametrosLlamada).then(function(reult){
                        vm.parametros.estado='ok';
                        
                    })
                }
            }

            
        })
    
})();