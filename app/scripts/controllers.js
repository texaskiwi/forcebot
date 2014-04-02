'use strict';

/*******************************
    Forcebot (main) Controller

    No DOM or data manipulation in controllers, 
    controller is glue between scope model and view

********************************/
angular.module('forcebot.controllers', [])
.controller('ForcebotController', ['$scope', 'portfolioService', function ($scope, portfolioService) {


    $scope.title = "Forcebot";
    

    var portfolioPromise = portfolioService.getCurrentPortfolio();

    // uses Restangular enhanced promise, $object is populated when the server returns information
    $scope.stocks = portfolioPromise.$object;

} ]);