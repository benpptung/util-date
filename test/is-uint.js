'use strict';

const expect = require('expect.js');
// todo:

describe('isUnit()', function() {

  var ok = function(val) {
    return function() {
      expect(isUInt(val)).to.be.ok();
    }
  };

  var nok = function(val) {
    return function() {
      expect(isUInt(val)).to.not.be.ok();
    }
  };

  it('should detect 1', ok(1));
  it('should detect 0', ok(0));
  it('should detect -1', nok(-1));
  it('should detect 1.1', nok(1.1));
  it('should deteckt -1.1', nok(-1.1));
  it('should detect string 1', ok('1'));
  it('should detect string 0', ok('0'));
  it('should detect string -1', nok('-1'));
  it('should detect string 1.1', nok('1.1'));
  it('should detect string -1.1', nok('-1.1'));
  it('should detect string', nok('123blah'));
  it('should detect Infinity', nok(Infinity));
  it('should detect NaN', nok(NaN));
  it('should detect undefined', nok());
  it('should detect null', nok(null));
  it('should detect {}', nok({}));
  it('should detect date', nok(new Date()))
});