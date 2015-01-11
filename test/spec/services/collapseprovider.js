'use strict';

describe('Service: CollapseProvider', function () {
  //var collapseCompare = function(a, b);
  // load the service's module

  // instantiate service
  var CollapseProvider;
  beforeEach(function() {
    var injector = angular.injector(['Collapse']);
    CollapseProvider = injector.get('CollapseProvider');
    CollapseProvider.reset();
  });

  it('should do something', function () {
    expect(!!CollapseProvider).toBe(true);
  });

  it('should let you add an item and retrieve it', function () {
    expect(CollapseProvider.add('test')).toBeTruthy();
    expect(CollapseProvider.get('test')).toBeTruthy();
    expect(CollapseProvider.get('test').name()).toEqual('test');
  });
  it('the functions of the Collapser should all work as expected', function () {
    CollapseProvider.add('test');
    var c = CollapseProvider.get('test');
    expect(c.isOpen()).toBe(false);
    expect(c.isClosed()).toBe(true);
    expect(c.name()).toEqual('test');
    expect(c.isOver()).toBe(false);
    expect(c.isHeld()).toBe(false);
    c.open();
    expect(c.isOpen()).toBe(true);
    c.close();
    expect(c.isOpen()).toBe(false);
    c.toggle();
    expect(c.isOpen()).toBe(true);
    c.toggle();
    expect(c.isOpen()).toBe(false);
    c.open();
    c.hold();
    expect(c.isHeld()).toBe(true);
    c.close();
    expect(c.isOpen()).toBe(true);
    c.release();
    c.close();
    expect(c.isOpen()).toBe(false);
    c.holdToggle();
    c.open();
    expect(c.isOpen()).toBe(false);
    expect(c.isHeld()).toBe(true);
    c.holdToggle();
    expect(c.isHeld()).toBe(false);
    c.over();
    expect(c.isOver()).toBe(true);
    c.notOver();
    expect(c.isOver()).toBe(false);
    c.overToggle();
    expect(c.isOver()).toBe(true);
    c.overToggle();
    expect(c.isOver()).toBe(false);
    expect(c.name('test2')).toEqual('test2');
    expect(c.name()).toEqual('test2');
  });

  it('should let you delete an item', function () {
    CollapseProvider.add('test');
    expect(CollapseProvider.exists('test')).toBeTruthy();
    CollapseProvider.remove('test');
    expect(CollapseProvider.get('test')).toBeFalsy();
    expect(CollapseProvider.exists('test')).toBeFalsy();
  });

  it('a Collapser should have the same name as it\'s key', function() {

  });
  it('should let you change the name of it', function() {
    CollapseProvider.add('test');
    expect(CollapseProvider.nameChange('test', 'test2')).toBeTruthy();
    expect(CollapseProvider.nameChange('test3', 'test4')).toBeFalsy();
    expect(CollapseProvider.get('test')).toBeFalsy();
    expect(CollapseProvider.get('test2')).toBeTruthy();
    expect(CollapseProvider.get('test2').name()).toEqual('test2');
  });
  it('should let you add more than one item', function () {
    CollapseProvider.add('test1');
    CollapseProvider.add('test2');
    expect(CollapseProvider.get('test1')).toBeTruthy();
    expect(CollapseProvider.get('test2')).toBeTruthy();
  });
  it('every should work', function () {
    CollapseProvider.add('test1');
    CollapseProvider.add('test2');
    expect(CollapseProvider.get('test1').isOpen()).toBe(false);
    expect(CollapseProvider.get('test2').isOpen()).toBe(false);
    expect(CollapseProvider.openExcept()).toBeTruthy();
    expect(CollapseProvider.get('test1').isOpen()).toBe(true);
    expect(CollapseProvider.get('test2').isOpen()).toBe(true);
    expect(CollapseProvider.closeExcept('test1')).toBeTruthy();
    expect(CollapseProvider.get('test1').isOpen()).toBe(true);
    expect(CollapseProvider.get('test2').isOpen()).toBe(false);
    expect(CollapseProvider.turnOn()).toBeFalsy();
    expect(CollapseProvider.turnOn('test2')).toBeTruthy();
    expect(CollapseProvider.get('test1').isOpen()).toBe(false);
    expect(CollapseProvider.get('test2').isOpen()).toBe(true);
  });

});
