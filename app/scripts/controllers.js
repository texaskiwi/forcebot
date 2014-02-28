'use strict';

/*******************************
    Forcebot (main) Controller
********************************/
angular.module('forcebot.controllers',[])
.controller('ForcebotController', ['$scope',function ($scope) {
                
    $scope.companies = [
            { "id": 1, "name": "Sunpower", "total": 4500 },
            { "id": 2, "name": "Apple Inc", "total": 7652 },
            { "id": 3, "name": "Transocean", "total": 2845 },
            { "id": 4, "name": "IRobot", "total": 12587 }
        ];

}]);