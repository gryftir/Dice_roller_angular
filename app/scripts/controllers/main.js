'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningApp
 */
angular.module('controllers')
.controller('MainCtrl', ['$scope', 'Roll', 'localStorageService', function ($scope, Roll, localStorageService) {
  if(localStorageService.length()) {
    var data = localStorageService.get('rolls');
    if (localStorageService.isSupported && Object.prototype.toString.call(data) === '[object Array]' && data.length > 0) {
      Roll.deserialize(JSON.stringify(data));
    }
  }

  $scope.Roll = Roll;
  $scope.rolls = Roll.rolls;
  $scope.update = function() {
    localStorageService.set('rolls', Roll.serialize());
  };
  $scope.$watch('rolls', $scope.update, true);
  if (Roll.rolls.length === 0 ) {
    $scope.addDice(2,6, 0,'Example 2d6+0');
    $scope.addDice(2,8,1, 'Example 2: 2d8+1');
  }


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
}
]);

