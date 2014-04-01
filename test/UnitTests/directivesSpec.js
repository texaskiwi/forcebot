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


  //TODO: showHideContainerDirective

//  describe('priceMovement', function(){
//      it('should set the class of the element to positivePrice when the contained number is positive',function(){

//          inject(function($compile,$rootScope){
//             
//              var element = $compile('<div price-change>8.88</div price-change>')($rootScope);
//              expect(element.text()).toEqual('<div class="positivePrice">8.88</div>');
//          });


//          });   
//  }

//)
});
