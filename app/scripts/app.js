'use strict';

angular.module('forcebot', [
  'ngRoute',
  'forcebot.services',
  'forcebot.controllers',
  'forcebot.directives'
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
