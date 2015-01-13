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
      if (!funcName) { return false;}
      //test if funcName is a function name
      if (angular.isFunction(Object.keys(self.hash)[0][funcName])) {
        Object.keys(self.hash).forEach(function(value) { 
          self.hash[value][funcName](); 
        });
      }
    };

    this.turnOn = function (name) {
      if (self.exists(name)) {
        self.every(close);
        self.get(name).open();
        return true;
      }
      return false;
    };
    this.turnOff = function (name) {
      if (self.exists(name)) {
        self.every(open);
        self.get(name).close();
        return true;
      }
      return false;
    };
    this.reset = function () {
      self.hash = {};
    };
  }
  return new CollapseHolder();
}]);
