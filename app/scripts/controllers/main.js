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
  $scope.Roll = Roll.add(6, 2).add(8, 2);
}
]);

controllers.service('Roll', [function() {
  var self = this;
  this.rolls = [];
  this.add = function(size, number) {
    var add = {};
    add.number = number || 1;
    add.size = size || 6;
    add.add = 0;
    add.rollDice = function() {
      this.result = 0;
      var results=[];
      for (var i = 0; i < this.number; i++) {
        var roll = Math.floor(Math.random() * this.size) + 1; 
        this.result += roll;
        results.push(roll);
      }
      add.results = results;
    }
    self.rolls.push(add);
    return self;
  }
}]);




