'use strict';

var isDate = require('./to-date').isDate;
var microsec = require('./microsec').strToMicrosec;
var TIMESTAMP_NUM_DEL = 1261440000000; // 40 years msec

module.exports = function(date) {
  if (typeof date.getTime == 'function') return date.getTime();

  if (/^\d+$/.test(date) && date > (Date.now() - TIMESTAMP_NUM_DEL) ) {
    return Number(date); // possible timestamp
  }

  if (typeof date != 'string') return '[dateToTs]: invalid date - ' + date;

  var _date = new Date(date);
  if (!isDate(_date)) return '[dateToTs]: invalid date string - ' + date;

  return Number(_date.getTime() + '.' + microsec(date));
};