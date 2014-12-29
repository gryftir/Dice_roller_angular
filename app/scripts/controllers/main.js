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
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.Roll = Roll.add( 2, 6).add(2,8);
}
]);

