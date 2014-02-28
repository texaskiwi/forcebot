angular.module('forcebot.directives', []).
  directive('appVersion', ['version', function(version) {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
          
          element.text(version);      
          
      }
    }
  }]);

