'use strict';

var beNum = require('./be-num');

/**
 *
 * @param ts
 * @param unix
 * @returns {string}
 */
exports = module.exports = function(ts, unix) {

  var n = beNum(ts);
  if (n) return exports.tsToMicrosec(ts, unix);
  return exports.strToMicrosec(ts);

};

exports.tsToMicrosec = function(ts, unix) {
  var m1 = unix === true ? 1000000 : 1000;
  var m2 = unix === true ? 1000 : 1;

  var fraction = ts * m1 - parseInt(ts * m2) * 1000;
  if (fraction == 0) return '000';

  fraction =  '00' + parseInt(fraction);
  return fraction.substr(-3);
};

exports.strToMicrosec = function(str) {
  var match =  /(.)+[\.](\d+)Z?$/.exec(str);
  if (!match) return '000';
  if (typeof match[2] != 'string') return '000';
  var msec = match[2];
  var len = msec.length;
  if (len < 4) return '000';
  if (len == 4) msec = msec + '00';
  if (len == 5) msec = msec + '0';
  return msec.substr(3);
};