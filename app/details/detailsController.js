(function(){
    angular.module('angularKT')
        .controller('detailsController',["details", detailsController]);
    function detailsController(details)
    {
        var ref = this;
        ref.details = details.query.pages;
    }
})();