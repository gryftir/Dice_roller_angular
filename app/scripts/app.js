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
    'ngSanitize',
    'services',
    'controllers',
    'ngTouch',
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
