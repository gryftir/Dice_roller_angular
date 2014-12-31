'use strict';

/**
 * @ngdoc function
 * @name learningApp.services:roll
 * @description
 * # services
 * services for learning app
 */
var services = angular.module('services', []);

services.factory('Roll', [function() {
  var MakeRoll = function () {
    var self = {};
    self.rolls = [];
    self.add = function(number, sizeOfDice, add) {
      var newRoll = {};
      newRoll.number = number || 1;
      newRoll.sizeOfDice = sizeOfDice || 6;
      newRoll.add = add || 0;
      newRoll.rollDice = function() {
        var result = 0;
        var results=[];
        for (var i = 0; i < newRoll.number; i++) {
          var roll = Math.floor(Math.random() * newRoll.sizeOfDice) + 1; 
          result += roll;
          results.push(roll);
        }
        newRoll.results = results;
        newRoll.result = result;
        newRoll.Roll = new MakeRoll();
      };
      self.rolls.push(newRoll);
      return self;
    };
    self.remove = function(index) {
      self.rolls.splice(index, 1);
    };
    self.get = function(index) {
      return self.rolls[index];
    };
    return self;
  };
  return new MakeRoll();
}
]);




