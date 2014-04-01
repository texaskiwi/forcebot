'use strict';

/* jasmine specs for filters go here */

//it('should work',inject(function($filter){
//    expect($filter('filterName')('filter input', 'arg1', 'arg2)).toEqual('whatever');
//}));


describe('filter', function () {
    beforeEach(module('forcebot.filters'));


    describe('market currency formatter', function () {

        var marketValue = 8.87654321;

        it('should return positive number rounded to 2 significant places', inject(function ($filter) {
            expect($filter('currencyMarket')(marketValue)).toEqual('8.88');
        }));
         
        var marketValue2 = -8.87654321;

        it('should return a negative number rounded to 2 significant places', inject(function ($filter) {
            expect($filter('currencyMarket')(marketValue2)).toEqual('-8.88');
        }));
    });
});