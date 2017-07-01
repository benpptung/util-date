'use strict';

const expect = require('expect.js');
// todo:

describe('isDate()', function() {

  var ok = function(val) {
    return function() {
      expect(isDate(val)).to.be.ok();
    }
  };

  var nok = function(val) {
    return function() {
      expect(isDate(val)).to.not.be.ok();
    }
  };

  it('should detect date', ok(new Date()));
  it('should detect fake date', nok(new Date('fake date')));
  it('should detect number', nok(1460093631394));
  it('should detect null', nok(null));
  it('should detect undefined', nok());
  it('should detect general string', nok('1460194684436'));
  it('should detect Boolean true', nok(true));
  it('should detect Boolean false', nok(false));
  it('should detect general object', nok({}));
  it('should detect function', nok(function(){}));
  it('should detect Infinity', nok(Infinity));
  it('should detect NaN', nok(NaN));
});