angular.module('forcebot.directives', []).
  directive('appVersion', ['version', function (version) {
      return {
          restrict: 'EA',
          link: function (scope, element, attrs) {
              element.text(version);
          }
      }
  } ])


   .directive('portfolioNavList', function () {
       return {
           templateUrl: 'views/portfolioNavigationList.html'
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


   })
   .directive('discuss',function(){
       return{
           templateUrl: 'views/discussLink.html'
       }
   })
   .directive('itemNews',function(){
       return{
           templateUrl: 'views/itemNews.html'
       }
   })
   .directive('itemNewsSummary',function(){
       return{
           templateUrl: 'views/itemNewsSummary.html'
       }
   })
   ;

