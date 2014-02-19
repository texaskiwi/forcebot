'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('Forcebot', function() {

  browser.get('index.html');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


});
