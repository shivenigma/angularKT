(function(){
    angular.module('angularKT')
        .controller('mainController',["$http",mainController]);
    function mainController($http)
    {
        var ref = this;
        ref.date = {};
    }
})();
