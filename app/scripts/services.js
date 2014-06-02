/**
** Services keep data around for the lifetime of the application
** and allow communication across modules
**/

'use strict';

// constant or value for editable globals
angular.module('forcebot.services', ['restangular'])
  .constant('version', '0.2')

  .config(function (RestangularProvider) { RestangularProvider.setBaseUrl('/REST'); })

  .factory('portfolioService', ['Restangular', function (Restangular) {
      return {
          getCurrentPortfolio: function () {
              var portfolio = Restangular.allUrl('portfolio');
              var portfolioListPromise = portfolio.getList();
              return portfolioListPromise;
          },
          getNews: function (param) {
              var news = Restangular.allUrl('news');
              var newsListPromise = news.getList({ query: param });
              return newsListPromise;
          },
          getNewsClassificationFromDate: function (symbol, startDate) {
              var newsClassification = Restangular.oneUrl('newsClassification');
              var newsClassificationPromise = newsClassification.get({ symbol: symbol, startDate: startDate });
              return newsClassificationPromise;
          }
      }

  } ]);



