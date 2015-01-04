'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningApp
 */
angular.module('controllers')
.controller('MainCtrl', ['$scope', 'Roll', function ($scope, Roll) {
  Roll.add(2,6, 0,'Example 2d6+0');
  Roll.add(2,8,1, 'Example 2: 2d8+1');
  $scope.Roll = Roll;
  $scope.AddRolls = [
    {
      'label':'Roller Title',
      'class':false,
      'id':'title',
      'model':'setTitle',
      'placeholder': 'Title',
      'type':'text'
    },
    {
    'label':'Number of Dice',
    'class':false,
    'id':'numberOfDice',
    'model':'numDice',
    'placeholder': '1',
    'type':'number',
  },
  {
    'label':'Size of Die',
    'class':false,
    'id':'sizeOfDie',
    'model':'sizeOfDie',
    'placeholder': '6',
    'type':'number',
  },
  {
    'label':'Bonus / Penalty to Roll Result',
    'class':false,
    'id':'amountToAdd',
    'model':'amountToAdd',
    'placeholder': '0',
    'type':'number',
  }
  ];
}]);

