'use strict';

describe('Service: CollapseProvider', function () {
  //var collapseCompare = function(a, b);
  // load the service's module

  // instantiate service
  var CollapseProvider;
  beforeEach(function() {
    var injector = angular.injector(['services']);
    CollapseProvider = injector.get('CollapseProvider');
    CollapseProvider.reset();
  });

  it('should do something', function () {
    expect(!!CollapseProvider).toBe(true);
  });

  it('should let you add an item and retrieve it', function () {
    expect(CollapseProvider.add('test')).toBeTruthy();
    expect(CollapseProvider.get('test')).toBeTruthy();
    expect(CollapseProvider.get('test').name).toEqual('test');
  });
  it('should be Collapsed and not holdOpen to start with', function () {
    CollapseProvider.add('test');
    expect(CollapseProvider.get('test').holdOpen).toBe(false);
    expect(CollapseProvider.get('test').Collapsed).toBe(true);
  });

  it('should let you toggle Collapsed when not held', function () {
    CollapseProvider.add('test');
    CollapseProvider.get('test').collapseToggle();
    expect(CollapseProvider.get('test').Collapsed).toBe(false);
    CollapseProvider.get('test').collapseToggle();
    expect(CollapseProvider.get('test').Collapsed).toBe(true);
  });

  it('should let you toggle holdOpen', function () {
    CollapseProvider.add('test');
    CollapseProvider.get('test').holdToggle();
    expect(CollapseProvider.get('test').holdOpen).toBe(true);
    CollapseProvider.get('test').holdToggle();
    expect(CollapseProvider.get('test').holdOpen).toBe(false);
  });
  it('should not let you toggle Collapsed when held', function () {
    CollapseProvider.add('test');
    //open
    CollapseProvider.get('test').collapseToggle();
    //held
    CollapseProvider.get('test').holdToggle();
    CollapseProvider.get('test').collapseToggle();
    expect(CollapseProvider.get('test').Collapsed).toBe(false);
  });
  it('should let you open and close', function () {
    var test = CollapseProvider.add('test');
    test.close();
    expect(test.Collapsed).toBeTruthy();
    test.open();
    expect(test.Collapsed).toBeFalsy();
  });
  it('can hold open or not', function () {
    var test = CollapseProvider.add('test');
    test.hold();
    expect(test.holdOpen).toBeTruthy();
    test.release();
    expect(test.holdOpen).toBeFalsy();
  });
  it('should not let you close when heldOpen', function () {
    var test = CollapseProvider.add('test');
    test.open();
    test.hold();
    expect(test.Collapsed).toBe(false);
  });
  it('should let you delete items', function() {
    CollapseProvider.add('test');
    CollapseProvider.remove('test');
    expect(CollapseProvider.get('test')).toBeFalsy();
  });
  it('should let you call functions with every', function () {
    var test1 = CollapseProvider.add('test1');
    var test2 = CollapseProvider.add('test2');
    expect(CollapseProvider.every('open')).toBeTruthy();
    expect(test1.Collapsed).toBeFalsy();
    expect(test2.Collapsed).toBeFalsy();
    expect(CollapseProvider.every('close')).toBeTruthy();
    expect(test1.Collapsed).toBeTruthy();
    expect(test2.Collapsed).toBeTruthy();
  });
  it('should let you turn on one Collapser and turn off others', function () {
    var test1 = CollapseProvider.add('test1');
    var test2 = CollapseProvider.add('test2');
    expect(CollapseProvider.openItemAndCollapseRemainder('test1')).toBeTruthy();
    expect(test1.Collapsed).toBeFalsy();
    expect(test2.Collapsed).toBeTruthy();
    expect(CollapseProvider.openItemAndCollapseRemainder('test2')).toBeTruthy();
    expect(test2.Collapsed).toBeFalsy();
    expect(test1.Collapsed).toBeTruthy();
  });

});




