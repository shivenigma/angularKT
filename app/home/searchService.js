(function(){
    angular.module('angularKT')
        .service('searchService',["$http", "$q", searchService]);
    function searchService($http, $q)
    {
        var search = {};
        search.getResult = function(searchTerm)
        {
            var defer = $q.defer();
            $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='+searchTerm+'&callback=JSON_CALLBACK')
                .then(function(success)
                {
                    defer.resolve(success.data);
                }, function(error)
                {
                    defer.reject(error);
                });
            return defer.promise;
        };
        return search;

    }
})();