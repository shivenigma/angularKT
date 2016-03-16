(function(){
    angular.module('Innoppl.common',[])
        .directive('tab', Tab);
    function Tab()
    {
        var dir = {};
        dir.restrict = "E";
        dir.transclude = true;
        dir.replace = true;
        dir.template = '<div role="tabpanel" ng-show="isActive">' +
                            '<div ng-transclude>' +
                            '</div>' +
                       '</div>';
        dir.scope = {
            title : '@title',
            active : '@active'
        };
        dir.require = '^tabset';
        dir.link = function(scope, elem, attr, tabset)
        {
            scope.isActive = tabset.isActive(scope.active);
            console.log(scope.isActive);
            tabset.addTabs(scope);
        };
        return dir;
    }
})();