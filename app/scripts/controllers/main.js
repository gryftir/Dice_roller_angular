'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningApp
 */
angular.module('learningApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Roll = function(size, number) {
      this.number = number || 1;
      this.size = size || 6;
      this.add = 0;
    }
    Roll.prototype.rollDice = function() {
      this.result = 0;
      var results=[];
      for (var i = 0; i < this.number; i++) {
        var roll = Math.floor(Math.random() * this.size) + 1; 
        this.result += roll;
        results.push(roll);
      }
      this.results = results;
    }
    $scope.Roll = [new Roll(6, 2), new Roll(8, 2)];
    
  }]);


