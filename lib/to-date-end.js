'use strict'

const systime = require('./systime')

module.exports = toDateEnd
function toDateEnd(ts) {
  var time = systime(ts)
  time = time.split(' ')[0] + ` 23:59:59`
  return time
}
