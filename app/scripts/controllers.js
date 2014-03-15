'use strict';

/*******************************
    Forcebot (main) Controller

    No DOM or data manipulation in controllers, 
    controller is glue between scope model and view

********************************/
angular.module('forcebot.controllers', [])
.controller('ForcebotController', ['$scope', 'portfolioService', function ($scope, portfolioService) {

    /* 
                
    $scope.companies = [
    { "id": 1, "name": "Sunpower", "total": 4500 },
    { "id": 2, "name": "Apple Inc", "total": 7652 },
    { "id": 3, "name": "Transocean", "total": 2845 },
    { "id": 4, "name": "IRobot", "total": 12587 }
    ];

    */

    $scope.title = "Forcebot service test";
    var portfolioPromise = portfolioService.getCurrentPortfolio();

    // uses Restangular enhanced promise, $object is populated when the server returns information
    $scope.stocks = portfolioPromise.$object;

} ]);