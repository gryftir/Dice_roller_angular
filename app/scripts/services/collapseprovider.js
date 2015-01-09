'use strict';

/**
 * @ngdoc service
 * @name learningApp.CollapseProvider
 * @description
 * # CollapseProvider
 * Factory in the learningApp.
 */
angular.module('Collapse', [])
  .factory('CollapseProvider', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
