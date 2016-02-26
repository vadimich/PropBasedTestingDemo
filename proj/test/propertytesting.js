/*!
 * propertytesting
 * https://github.com//propertytesting
 */

'use strict';

var expect = require('chai').expect;
var lib = process.env.JSCOV ? require('../lib-cov/propertytesting') : require('../lib/propertytesting');

describe('propertytesting module', function () {
  it('internal exports object', function () {
    expect(lib).to.be.an('object');
  });
});
