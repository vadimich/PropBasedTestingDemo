/*!
 * propertytesting
 * https://github.com//propertytesting
 */

'use strict';

// var expect = require('chai').expect;
var jsc = require('jsverify');
var R = require('ramda');
var options = { tests: 100, quiet: false };
// var lib = process.env.JSCOV ? require('../lib-cov/propertytesting') : require('../lib/propertytesting');

var alphoOnly = function (c) {
  var num = c.charCodeAt();
  return (num >= 65 && num <= 90) || (num >= 97 && num <= 122);
};

describe('Alpha range regex', function () {
  it('should pass all alphas', function () {
    var property = jsc.forall(jsc.suchthat('asciichar', function (c) { return alphoOnly(c); }), function (n) {
      return /[A-z]/.test(n);
    });
    jsc.assert(property, options);
  });
  it('should fail all non alphas', function () {
    var property = jsc.forall(jsc.suchthat('asciichar', function (c) { return !alphoOnly(c) && !R.contains(c)(['[','\\',']','^','_','`']); }), function (n) {
      return !/[A-z]/.test(n);
    });
    jsc.assert(property, options);
  });
});

