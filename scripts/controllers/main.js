'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningApp
 */
angular.module('controllers')
.controller('MainCtrl', ['$scope', 'Roll','localStorageService', 'CollapseProvider',  function ($scope, Roll, localStorageService, CollapseProvider) {

  $scope.reset = function () {
    localStorageService.remove('rolls');
    Roll.reset();
    Roll.add(2,8, 1,'Example: 2d8+1');
  };
  //setup rolls from session storage
  var data = localStorageService.get('rolls');
  if (data) {
    Roll.deserialize(JSON.stringify(data));
  }
  //session storage didn't work
  if (! angular.isArray(Roll.rolls) || Roll.rolls.length < 1) {
    $scope.reset();
  }
  //session storage was empty

  $scope.Roll = Roll;
  $scope.rolls = Roll.rolls;
  $scope.update = function() {
    localStorageService.set('rolls', Roll.serialize());
  };
  $scope.$watch('rolls', $scope.update, true);



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
  $scope.addCollapse = CollapseProvider.add('addCollapse');
}
]);

