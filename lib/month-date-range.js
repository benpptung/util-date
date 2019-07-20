'use strict'

module.exports = monthDateRange

function monthDateRange(year, month) {
  return {
    start: new Date(year, month - 1),
    end: new Date(year, month)
  }
}
