/*!
 * propertytesting
 * https://github.com//propertytesting
 */

'use strict';

// var expect = require('chai').expect;
var jsc = require('jsverify');
// var lib = process.env.JSCOV ? require('../lib-cov/propertytesting') : require('../lib/propertytesting');

describe('natural numbers', function () {
  jsc.property('are greater or equal to zero', 'nat', function (n) {
    return n >= 0;
  });

  jsc.property('added together result is larger than or equal to one of the nats', 'nat', 'nat', function (n1, n2) {
    var sum = n1 + n2;
    return sum >= n1 || sum >= n2;
  });

  jsc.property('also testing max function', 'number', 'number', function (n1, n2) {
    var max = Math.max(n1, n2);
    return max === n1 || max === n2;
  });
});

