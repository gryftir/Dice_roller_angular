'use strict';

/**
 * @ngdoc overview
 * @name learningApp
 * @description
 * # learningApp
 *
 * Main module of the application.
 */
var learning = angular
  .module('learningApp', [
    'ngRoute',
    'controllers'
  ]);

  learning.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
