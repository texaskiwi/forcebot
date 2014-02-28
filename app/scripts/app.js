angular.module('forcebot', [
  'ngRoute',
  'forcebot.controllers',
  'forcebot.directives',
  'forcebot.services'
]).
/********************
    Route Provider
*********************/
config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html',
                controller: 'ForcebotController'
            }).
            otherwise({redirectTo: '/home'});
    }]);
