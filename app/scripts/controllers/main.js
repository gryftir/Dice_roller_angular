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
  Roll.add(2,6);
  Roll.add(2,8);
  $scope.Roll = Roll;
  $scope.AddRolls = [
    {
    'label':'Number of Dice',
    'class':false,
    'id':'numberOfDice',
    'model':'numDice',
    'placeholder': '1'
  },
  {
    'label':'Size of Die',
    'class':false,
    'id':'sizeOfDie',
    'model':'sizeOfDie',
    'placeholder': '6'
  },
  {
    'label':'Bonus / Penalty to Roll Result',
    'class':false,
    'id':'amountToAdd',
    'model':'amountToAdd',
    'placeholder': '0'
  }
  ];
}]);



  //<div class="row vert-10">
  //<label class="col-sm-7" ng-class="{{addroll.class}}" for="{{addroll.id}}">{{addroll.label}}</label>
  //<div class="col-sm-5 pull-right">
  //<input type="number" min="0" placeholder="{{addroll.placeholder}}" name="{{addroll.label}}" class="form-control" id="{{addroll.id}}" ng-model="{{addroll.model}}"/>
  //</div>
  //</div>

