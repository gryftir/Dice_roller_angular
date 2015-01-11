'use strict';

/**
 * @ngdoc service
 * @name learningApp.CollapseProvider
 * @description
 * # CollapseProvider
 * Factory in the learningApp.
 */
var collapse = angular.module('Collapse', []);

function Collapser (newName) {
  var self = this;
  var name = newName;
  var open = false;
  //hold open
  var hold = false;

  //for mouse over
  var over = false;

  this.toggle = function() {
    if (self.isHeld()) { return; }
    open = ! open;
    return open;
  };
  this.isOpen = function() {
    return open === true;
  };
  this.isClosed = function() {
    return open === false;

  };
  this.close = function() {
    if (self.isHeld()) { return; }
    open = false;
    return open;

  };
  this.open = function() {
    if (self.isHeld()) { return; }
    open = true;
  };
  this.hold = function() {
    hold = true;
    return hold;
  };
  this.release = function() {
    hold = false; 
    return hold;
  };
  this.isHeld = function() {
    return hold === true;
  };
  this.holdToggle = function() {
    hold = ! hold;
    return hold;
  };

  this.over = function() {
    over = true;
    return over;
  };
  this.notOver = function() {
    over = false; 
    return over;
  };
  this.isOver = function() {
    return over === true;
  };
  this.overToggle = function() {
    over = ! over;
    return over;
  };
  this.name = function(change) {
    if (change) {
      name = change;
    }
    return name;
  };

}

function CollapseProvider() {
  var hash = {};
  var self = this;
  self.hash = hash;
  this.add = function(name) {
    if (!name) {
      return false;
    }
    var item = new Collapser(name);
    hash[name] = item;
    return item;
  };
  this.remove = function(name) {
    return delete hash[name];
  };
  this.get = function(name) {
    return hash[name];
  };
  this.exists = function (name) {
    if (name) {
      return hash.hasOwnProperty(name);
    }
    return false;
  };
  this._every = function(func, nameToIgnore) {
    if (!func) { return false;}
    if (nameToIgnore) {
      Object.keys(hash).filter(
        function(value) {return value !== nameToIgnore;})
        .forEach(function(value) { hash[value][func](); });
    }
    else {
      Object.keys(hash).forEach(function(value) { 
        hash[value][func](); 
      });
    }
    return true;
  };

  //these take the name of a Collapse not to effect
  this.releaseExcept = function(name) {
    return self._every('release', name);
  };
  this.holdExcept = function(name) {
    return self._every('hold', name);
  };
  this.closeExcept = function(name) {
    return self._every('close', name);
  };
  this.openExcept = function(name) {
    return self._every('open', name);
  };
  this.turnOn = function (name) {
    if (self.exists(name)) {
      self.closeExcept();
      self.get(name).open();
      return true;
    }
    return false;
  };
  this.turnOff = function (name) {
    if (self.exists(name)) {
      self.openExcept();
      self.get(name).close();
      return true;
    }
    return false;
  };
  this.reset = function () {
    hash = {};
  };
  this.nameChange = function(oldName, newName) {
    var item = self.get(oldName);
    if (item) {
      item.name(newName);
      self.remove(oldName);
      hash[newName] = item; //clobbers
      return item;
    }
    return false;
  };
}

collapse.factory('CollapseProvider', function () {
  return new CollapseProvider();
});
