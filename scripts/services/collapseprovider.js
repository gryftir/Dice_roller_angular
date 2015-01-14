'use strict';

/**
 * @ngdoc service
 * @name learningApp.CollapseProvider
 * @description
 * # CollapseProvider
 * Factory in the learningApp.
 */

angular.module('services').factory('CollapseProvider', [function () {
  function Collapser (newName) {
    var self = this;
    self.name = newName;
    self.Collapsed = true;
    self.holdOpen = false;

    //toggle if held open and not collapsed
    this.collapseToggle = function() {
      if (self.holdOpen && ! self.Collapsed) { return; }
      self.Collapsed = ! self.Collapsed;
    };
    this.holdToggle = function() {
      self.holdOpen = ! self.holdOpen;
      return self.holdOpen;
    };
    this.release = function () {
      self.holdOpen = false;
    };
    this.hold = function () {
      self.holdOpen = true;
    };
    this.close = function () {
      if (self.holdOpen) { return; }
      self.Collapsed = true;
    };
    this.open = function () {
      self.Collapsed = false;
    };

  }

  function CollapseHolder() {
    var self = this;
    self.hash = {};
    this.add = function(name) {
      if (!name) {
        return false;
      }
      var item = new Collapser(name);
      self.hash[name] = item;
      return item;
    };
    this.remove = function(name) {
      return delete self.hash[name];
    };
    this.get = function(name) {
      return self.hash[name];
    };
    this.exists = function (name) {
      if (name) {
        return self.hash.hasOwnProperty(name);
      }
      return false;
    };
    this.every = function(funcName) {
      if (!funcName) { 
        return false;
      }
      Object.keys(self.hash).forEach(function(value) { 
        self.hash[value][funcName](); 
      });
      return true;
    };

    this.openItemAndCollapseRemainder = function (name) {
      var isFunc;
      if (self.exists(name)) {
        isFunc = self.every('close');
        if (isFunc) {
          self.get(name).open();
        }
        return isFunc;
      }
      return false;
    };

    this.reset = function () {
      self.hash = {};
    };
  }
  return new CollapseHolder();
}]);
