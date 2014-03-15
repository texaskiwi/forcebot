'use strict';

describe('service', function () {

    beforeEach(module('forcebot.services'));

    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.2');
        }));
    });


    describe('portfolioREST',function(){
        it('should return the REST service Uri', inject(function (portfolioREST)
        {
            expect(portfolioREST).toEqual('/REST/Portfolio');
        }));
    });

    
    describe('portfolioService', function () {
        it('should connect sucessfully to the portfolio REST service',
            inject(function (portfolioService,$q) {  
            
                var deferred = $q.defer();
                spyOn(portfolioService,'getCurrentPortfolio').andReturn(deferred.promise);
                
                portfolioService.getCurrentPortfolio();

                deferred.resolve();   
                
                expect(scope.error).toBe(null);               
                          
                
            }));
    });


    

});