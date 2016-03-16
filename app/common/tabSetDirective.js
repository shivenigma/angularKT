(function(){
    angular.module('Innoppl.common')
        .directive('tabset',TabSet);
    function TabSet()
    {
        var dir = {};
        dir.restrict = "E";
        dir.transclude = true;
        dir.replace = true;
        dir.scope = {};
        dir.template = '<div>' +
                           '<div>' +
                               '<ul class="nav nav-tabs" role="tablist">' +
                                   '<li ng-repeat="tab in tabset.tabs track by $index" ng-class="{\'active\': tab.isActive}">' +
                                    '<a role="tab" ng-click="tabset.selectTab(tab);">{{tab.title}}</a>' +
                                   '</li>' +
                               '</ul>' +
                           '</div>' +
                           '<div class="tab-content" ng-transclude>' +
                           '</div>' +
                       '</div>';
        dir.bindToController = true;
        dir.controllerAs = 'tabset';
        dir.controller = function()
        {
            var self = this;
            self.tabs = [];
            self.addTabs = function(tab)
            {
                self.tabs.push(tab);
            };
            self.isActive = function(active)
            {
               if(active !== undefined)
               {
                   return true;
               }
               else
               {
                   return false;
               }
            };
            self.selectTab = function(clickedTab)
            {
                angular.forEach(self.tabs, function(item)
                {
                    if(item.isActive && item !== clickedTab)
                    {
                        item.isActive = false;
                    }
                });
                clickedTab.isActive = true;
            }
        };
        return dir;
    }
})();