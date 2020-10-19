(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('sam-test-data')) :
  typeof define === 'function' && define.amd ? define(['sam-test-data'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.myView = factory(global.data));
}(this, (function (data) { 'use strict';

  console.log(data.random, data.a, data.b);

  var c = function c() {
    console.log(123);
  };

  c();
  var index = {};

  return index;

})));
