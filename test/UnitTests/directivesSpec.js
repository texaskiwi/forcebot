'use strict';

describe('directives', function() {
  beforeEach(module('forcebot.directives'));

  describe('appVersion', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<div app-version></div app-version>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
