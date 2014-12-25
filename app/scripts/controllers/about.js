'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learningApp
 */
angular.module('learningApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
