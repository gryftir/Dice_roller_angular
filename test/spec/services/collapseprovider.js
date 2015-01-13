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
  });
  it('should be collapsed and not held to start with', function () {
    CollapseProvider.add('test');
    expect(CollapseProvider.get('test').holdOpen).toBe(false);
    expect(CollapseProvider.get('test').Collapsed).toBe(true);
  });

  it('should let you toggle Collapse when not held', function () {
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
  it('should not let you toggle closed when held', function () {
    CollapseProvider.add('test');
    //open
    CollapseProvider.get('test').collapseToggle();
    //held
    CollapseProvider.get('test').holdToggle();
    CollapseProvider.get('test').collapseToggle();
    expect(CollapseProvider.get('test').Collapsed).toBe(false);
  });

});
