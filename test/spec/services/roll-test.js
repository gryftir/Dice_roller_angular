'use strict';

describe('Service: Roll', function () {

  var Roll;
  var rollCompare = function(a, b) {
    return (a.number === b.number && a.sizeOfDice === b.sizeOfDice && a.addValue === b.addValue && a.title === b.title);
  };
  // load the controller's module
  beforeEach(function() {
    
    var injector = angular.injector(['services']);
    Roll = injector.get('Roll');
    Roll.reset();
  });


  it('Should start out with Roll.rolls empty', function () {
    expect(Roll).not.toBe(null);
    expect(Roll.rolls).not.toBe(null);
    expect(Roll.rolls.length).toEqual(0);
  });
  it('Should let you add elements', function() {
    expect(Roll.rolls.length).toEqual(0);
    Roll.add(1,6,0);
    expect(Roll.rolls.length).toEqual(1);
  });
  it('should let you remove elements', function() {
    expect(Roll.rolls.length).toEqual(0);
    Roll.add(1,6,0);
    Roll.remove(0);
    expect(Roll.rolls.length).toEqual(0);
  });
  it('the default element should be 1, 6, 0', function() {
    jasmine.addCustomEqualityTester(rollCompare);
    Roll.add(1,6,0);
    Roll.add();
    expect(Roll.rolls[0]).toEqual(Roll.rolls[1]);
  });
  it('should be able to create elements that aren\'t the default', function () {
    jasmine.addCustomEqualityTester(rollCompare);
    Roll.add();
    Roll.add(1,7,1);
    expect(Roll.rolls[0]).not.toEqual(Roll.rolls[1]);
  });
  it('allows you to make and access subrollers', function() {
    jasmine.addCustomEqualityTester(rollCompare);
    Roll.add();
    expect(Roll.rolls[0]).toBeDefined();
    Roll.rolls[0].add();
    expect(Roll.rolls[0].get(0)).not.toBe(null);
    expect(Roll.rolls[0].get(0)).toEqual(Roll.rolls[0]);
  });
  it('lets you reset values', function() {
      Roll.add();
      Roll.reset();
      expect(Roll.rolls).not.toBe(null);
      expect(Roll.rolls.length).toEqual(0);
  });
  it('can serialize and deserialize', function () {
    Roll.add(3,4,5,'test');
    var beforeStore = Roll.get(0);
    var storage = Roll.serialize();
    Roll.reset();
    expect(Roll.rolls.length).toEqual(0);
    Roll.deserialize(storage);
    var afterStore = Roll.get(0);
    var compareStore = {
      number:3,
      sizeOfDice: 4,
      addValue: 5,
      title: 'test'
    };

    jasmine.addCustomEqualityTester(rollCompare);
    expect(beforeStore).toEqual(afterStore);
    expect(afterStore.add).toBeDefined();
    expect(afterStore.add).not.toBeNull();
    expect(afterStore).toEqual(compareStore);
    expect(afterStore.rollDice).not.toBeNull();
    expect(afterStore.rollDice).toBeDefined();
  });

    
});
