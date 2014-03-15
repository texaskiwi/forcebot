/**
** Services keep data around for the lifetime of the application
** and allow communication across modules
**/

'use strict';

// constant or value for editable globals
angular.module('forcebot.services', ['restangular']).
  constant('version', '0.2')
  .config(function (RestangularProvider) { RestangularProvider.setBaseUrl('/REST'); })
  .factory('portfolioService', ['Restangular', function (Restangular) {
      return { getCurrentPortfolio: function () 
          {
              var portfolio = Restangular.allUrl('portfolio');
              var portfolioList = portfolio.getList();
              return portfolioList;
          }
      }

  } ]);



