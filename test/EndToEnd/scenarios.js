'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */
/* test DOM manipulation or the 'wiring' of the application */
describe('Forcebot', function () {

    browser.get('index.html');

    it('should automatically redirect to /home when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    it('should list the portfolio of the current user', function () {
         expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Portfolio/);
    });



});
