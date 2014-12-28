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
  $scope.Roll = [new Roll(6, 2), new Roll(8, 2)];
}
]);

controllers.service('Roll', [function(size, number) {
  return function(size, number) {
    this.number = number || 1;
    this.size = size || 6;
    this.add = 0;
    this.rollDice = function() {
      this.result = 0;
      var results=[];
      for (var i = 0; i < this.number; i++) {
        var roll = Math.floor(Math.random() * this.size) + 1; 
        this.result += roll;
        results.push(roll);
      }
      this.results = results;
    }
  }
}]);




