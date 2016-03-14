(function () {
    angular.module('angularKT')
        .controller('homeController', ["searchService", homeController]);
    function homeController(searchService) {
        var ref = this;
        ref.searchTerm = "";
        ref.result = {};
        ref.searchResults = {};
        ref.search = function () {
            if (ref.searchTerm != "") {
                searchService.getResult(ref.searchTerm)
                    .then(function (success) {
                        ref.result = success.query.search;
                    }, function (error) {
                        alert('something is not wrong.');
                    });
            }
        }
        ref.showResults = function()
        {
            ref.searchResults = ref.result;
        }
    }
})();