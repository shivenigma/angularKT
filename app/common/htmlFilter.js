(function(){
    angular.module('angularKT')
        .filter('htmlFilter',['$sce', function($sce) {
            return function (val)
            {
                return $sce.trustAsHtml(val);
            }
        }]);
})();