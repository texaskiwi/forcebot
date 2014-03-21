'use strict';

describe('service', function () {

    beforeEach(module('forcebot.services'));

    describe('version constant', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.2');
        }));
    });


    describe('portfolioService', function () {
        it('should connect sucessfully to the portfolio REST service',
            inject(function (portfolioService, $rootScope, $httpBackend) {


                $httpBackend.when('GET','/REST/portfolio').respond(' [{"Id":"537065f0-d594-42db-896e-30ccbbf0b7ed","Name":"Tesla","Symbol":"TSLA"},{"Id":"35645a3d-4b85-4538-bd4c-6983523e626d","Name":"Sunpower","Symbol":"SPWR"},{"Id":"20b80944-3b44-4dd9-976b-c8281dd7d478","Name":"Apple","Symbol":"AAPL"},{"Id":"7c4fa14a-9a3e-44ff-8304-cb625a927bfc","Name":"General Electric","Symbol":"GE"},{"Id":"025b978d-586c-476f-a7b2-e150d2d1816d","Name":"iRobot","Symbol":"IRBT"}]');


                var testStock;

                var portfolioPromise = portfolioService.getCurrentPortfolio();
                $httpBackend.flush();

                portfolioPromise.then(function (stocks) {
                    testStock = stocks;
                });
                

                expect(expect(testStock).not.toBe(null));
                //expect(1).toEqual(1);

            }));
    });




});