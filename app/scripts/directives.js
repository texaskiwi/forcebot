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
   })

   .directive('selectedStockSummary', function () {


       return {
           templateUrl: 'views/selectedStockSummary.html'
       }
       // return function (scope, elm) {
       //
       //}

   })
   .directive('showhideSideContainer', function () {


       function toggleNav(scope, element, attrs) {
           scope.toggleNav = function () {
               scope.navVisible = !scope.navVisible;
               if (scope.navVisible) {
                   scope.toggleViewPortfolio = 'Hide portfolio';
               }
               else {
                   scope.toggleViewPortfolio = scope.toggleViewPortfolioDefault;
               }

           }
       }

       return {
           link: toggleNav,
           templateUrl: 'views/showhideSideContainer.html',
           controller:  function($scope){               
               $scope.toggleViewPortfolioDefault = "View portfolio";
               $scope.toggleViewPortfolio = $scope.toggleViewPortfolioDefault;

           }
       }
   });

