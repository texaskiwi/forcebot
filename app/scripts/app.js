'use strict';

angular.module('forcebot', [
  'ngRoute',
  'forcebot.filters',
  'forcebot.services',
  'forcebot.controllers',
  'forcebot.directives',
]).
/********************
    Route Provider
*********************/
config(['$routeProvider','$httpProvider',
    function($routeProvider,$httpProvider){
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html',
                controller: 'ForcebotController'
            }).
            when('/item/:itemId', {
                templateUrl: 'views/home.html',
                controller: 'ForcebotController'
            }).
            otherwise({redirectTo: '/home'});
        //Use CORS
        $httpProvider.defaults.useXDomain = true; 
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

/****
keep the route for deep linking
but don't navigate from the stocks, instead call a function on the controller
*****/