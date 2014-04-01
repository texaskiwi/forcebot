'use strict';

angular.module('forcebot.filters', []).

// use this instead of the angular currency filter
// because we only deal with $US and we don't want to use
// accounting notation for negative numbers
  filter('currencyMarket', function () {
      return function (input) {
         return input.toFixed(2);
      }
  }

  );