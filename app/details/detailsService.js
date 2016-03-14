(function(){
    angular.module('angularKT')
        .service('detailsService',["$http","$q",details]);
    function details($http, $q)
    {
        var ret = {};
        ret.getDetails = function(title)
        {
            var defer = $q.defer();
            $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles='+title+'&format=json&callback=JSON_CALLBACK')
                .then(function (success) {
                    defer.resolve(success.data);
                }, function(error) {
                    defer.reject(error);
                });
            return defer.promise;
        }
        return ret;
    }
})();