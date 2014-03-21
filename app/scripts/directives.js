angular.module('forcebot.directives', []).
  directive('appVersion', ['version', function (version) {
      return {
          restrict: 'EA',
          link: function (scope, element, attrs) {
              element.text(version);
          }
      }
  } ])


   .directive('portfolio', function () {
       return {
           templateUrl: 'views/portfolio.html'
       };
   })

   .directive('addStockForm', function () {
       return {
           templateUrl: 'views/addStockForm.html'
       };
   });

