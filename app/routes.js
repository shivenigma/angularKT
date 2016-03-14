(function(){
    angular.module('angularKT')
        .config(function($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl : 'app/home/home.html',
                    controller : 'homeController as vm'
                })
                .when('/details/:title', {
                    templateUrl: 'app/details/details.html',
                    controller : 'detailsController as vm',
                    resolve : {
                        details : function($route, detailsService)
                        {
                            var title = $route.current.params.title;
                            return detailsService.getDetails(title);
                        }
                    }
                })
                .when('/user/register', {
                    templateUrl : 'app/user/signup.html',
                    controller : 'userController as vm'
                })
                .otherwise('/home');
        });
})();