'use strict';

/**
 * Accept date string, timestamp and convert into Date object
 * @param {timestamp|dateString} ts
 * @param {Boolean} [unix] if true, treat ts as unix timestamp
 * @returns {Date|false}
 */

exports.tsToDate = tsToDate;

function tsToDate(ts, unix) {

  if (isDate(ts)) return ts;

  if (typeof ts != 'string' && typeof ts != 'number') {
    return false;
  }

  // check if it is number string and a unix timestamp
  var n = numStrToNum(ts);
  if (n) {
    ts = unix === true ? n * 1000 : n;
  }

  // treat ts as general date string
  var d = new Date(ts);
  return isNaN(d.getTime()) ? false : d;
}

/**
 * Accetp only string or number, or have to check typeof before to use it.
 * @param str
 * @returns {*}
 */
function numStrToNum(str) {
  var n = str * 1;
  return !isNaN(n) ? n : false;
}

exports.isDate = isDate;

var toString = Object.prototype.toString;
var dateId = toString.call(new Date());

function isDate(d) {
  //return d instanceof Date && typeof d.getTime == 'function' && !isNaN(d.getTime());
  return toString.call(d) == dateId && typeof d.getTime == 'function' && /^\d+$/.test(d.getTime());
}
