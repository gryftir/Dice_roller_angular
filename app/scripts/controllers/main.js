'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningApp
 */
var controllers = angular.module('controllers')
.controller('MainCtrl', ['$scope', 'Roll', function ($scope, Roll) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.Roll = Roll.add( 2, 6).add(2,8);
}
]);

controllers.service('Roll', [function() {
  var self = this;
  this.rolls = [];
  this.add = function(number, sizeOfDice, add) {
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
    }
    self.rolls.push(newRoll);
    return self;
  }
  this.remove = function(index) {
    self.rolls.splice(index, 1);
  }
}]);




