'use strict';

/**
 * @ngdoc function
 * @name learningApp.services:roll
 * @description
 * # services
 * services for learning app
 */
var services = angular.module('services', []);

function AddRoll(number, sizeOfDice, add, title) {
  var self = this;
  this.rolls = [];
  this.add = function(number, sizeOfDice, add, title) {
    self.rolls.push(new AddRoll(number, sizeOfDice, add, title));
  };
  this.title = title || 'Title';
  this.number = number || 1;
  this.sizeOfDice = sizeOfDice || 6;
  this.addValue = add || 0;
  this.rollDice = function() {
  this.__type__ = 'AddRoll';
    var result = 0;
    var results=[];
    for (var i = 0; i < this.number; i++) {
      var roll = Math.floor(Math.random() * this.sizeOfDice) + 1; 
      result += roll;
      results.push(roll);
    }
    this.results = results;
    this.result = result + this.addValue;
    return this;
  };
  this.remove = function(index) {
    self.rolls.splice(index, 1);
  };
  this.get = function(index) {
    return self.rolls[index];
  };
    
}

function MakeRoll() {
  var self = this;
  this.print = function() {
    console.log(self.toJson());
  };
  this.toJson = function() {
    return JSON.stringify(self.rolls);
  };

  this.fromJson = function(value) {
    var revive = function (key, value) {
      if (value.hasOwnProperty('__type__') && value.__type__ === 'AddRoll' ) {
        return new AddRoll(value.number, value.sizeOfDice, value.addValue, value.title);
      }
      return value;
    };
    return JSON.parse(value, revive);
  };
  this.__type__ = 'MakeRoll';
}

MakeRoll.prototype = new AddRoll();


services.factory('Roll', [function() {
  return new MakeRoll();
}
]);
