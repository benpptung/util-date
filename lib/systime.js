'use strict';

var microsec = require('./microsec');
var tsToDate = require('./to-date').tsToDate;

module.exports = systime;
/**
 * parameter: date
 * // dateString : JSON.stringify(new Date())
 * // timestamp: 1456390337133 or 1456390337(*)
 * // date: new Date
 *
 * unix timestamp need to set unix as true
 *
 * @param {Date|timestamp|dateString} date
 * @param {Boolean} [unix] unix timestamp or js timestamp, default to false
 * @param {Number} [dec] , milliseconds, default to 0, range: 0 - 6
 * @returns {string}
 */
function systime(date, unix, dec) {

  var _d;

  if (unix === true) {
    dec = [0, 1, 2, 3, 4, 5, 6].indexOf(dec) >= 0 ? dec : 0;
  }

  if ([0, 1, 2, 3, 4, 5, 6].indexOf(unix) >= 0) {
    dec = unix;
    unix = false;
  }

  if ([0, 1, 2, 3, 4, 5, 6].indexOf(dec) < 0) {
    dec = 0;
  }

  // if date is Date object
  if (date instanceof Date === true) {
    _d = date;
  }

  // if date is timestamp, dateString
  if (!_d) {
    _d = tsToDate(date, unix);
  }

  // if we have no Date object or have an invalid Date object
  if (!_d || isNaN(_d.getTime())) {
    return '[systime]: invalid date - ' + date;
  }

  var y = _d.getFullYear();
  var M = '0' + ( _d.getMonth() + 1 );
  var d = '0' + _d.getDate();
  var h = '0' + _d.getHours();
  var m = '0' + _d.getMinutes();
  var s = '0' + _d.getSeconds();

  // initially generate milliseconds
  var S = '00' + _d.getMilliseconds();
  S = S.substr(-3) + ( dec > 3 ? microsec(date, unix) : '000');
  S = dec > 0 ? '.' + S.substr(0, dec) : '';



  return y + '-' + M.substr(-2) + '-' + d.substr(-2)  + ' '
    + h.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2) + S;
}