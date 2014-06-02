'use strict';

/*******************************
    Forcebot (main) Controller

    No DOM or data manipulation in controllers, 
    controller is glue between scope model and view

********************************/
angular.module('forcebot.controllers', [])
.controller('ForcebotController', ['$scope', 'portfolioService', function ($scope, portfolioService) {

    $scope.toggleNav = function () {
        $scope.navVisible = !$scope.navVisible;
        if ($scope.navVisible) {
            $scope.toggleViewPortfolio = 'Hide portfolio';
        }
        else {
            $scope.toggleViewPortfolio = $scope.toggleViewPortfolioDefault;
        }

    }

    $scope.toggleViewPortfolioDefault = "View portfolio";
    $scope.toggleViewPortfolio = $scope.toggleViewPortfolioDefault;

    $scope.title = "Forcebot";



    var portfolioPromise = portfolioService.getCurrentPortfolio();

    // uses Restangular enhanced promise, $object is populated when the server returns information
    $scope.stocks = portfolioPromise.$object;

    portfolioPromise.then(function (stocks) {
        if (stocks.length > 0) {
            var newsPromise = portfolioService.getNews(stocks[0].Symbol);
            $scope.itemNews = newsPromise.$object;
            stocks[0].IsSelected = true;
            $scope.selectedItem = stocks[0];
        }
    })

    $scope.selectStock = function (input) {
        var newsPromise = portfolioService.getNews(input.Symbol);
        $scope.itemNews = newsPromise.$object;
        // deselect all the stocks except for the one we want to select
        _.map($scope.stocks, function (stock) {
            return (stock !== input) ? stock.IsSelected = false : stock.IsSelected = true;
        });

        // populate this controller's scope's selectedItem property
        var selectedItem = _.find($scope.stocks, function (stock) {
           return stock === input;
        });

        $scope.selectedItem = selectedItem;
    };

    $scope.loadNewsSummary = function (input){

        1d
        5d
        1m
        3m
        1y
        var newsPromise = portfolioService.getNewsClassificationFromDate(startDate);
    }


} ]);




