  var app = angular.module('forcebot', ['ngRoute','navigation']);



                            /*******************************
                                Forcebot (main) Controller
                            ********************************/
            app.controller('ForcebotController', function ($scope) {
                
                $scope.companies = [
                        { "id": 1, "name": "Sunpower", "total": 4500 },
                        { "id": 2, "name": "Apple Inc", "total": 7652 },
                        { "id": 3, "name": "Transocean", "total": 2845 },
                        { "id": 4, "name": "IRobot", "total": 12587 }
                    ];

            });







                                /********************
                                    Route Provider
                                *********************/
            app.config(['$routeProvider',
                function($routeProvider){
                    $routeProvider.
                        when('/', {
                            templateUrl: 'views/companies.html',
                            controller: 'ForcebotController'
                        }).
                        otherwise({redirectTo: '/'});
                }]);
