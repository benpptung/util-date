'use strict'

const systime = require('./systime')

exports.toDateEnd = toDateEnd
function toDateEnd(ts) {
  var time = systime(ts)
  time = time.split(' ')[0] + ` 23:59:59`
  return time
}

exports.toDateStart = toDateStart
function toDateStart(ts) {
  var time = systime(ts)
  time = time.split(' ')[0] + ` 00:00:00`
  return time
}
