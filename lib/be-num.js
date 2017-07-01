'use strict';

module.exports = function(num) {

  if (typeof num != 'number' && typeof num != 'string') return NaN;
  //if (typeof num == 'boolean' || num === null) return NaN;
  if (num == Infinity || num == -Infinity) return NaN;
  return num * 1;
};