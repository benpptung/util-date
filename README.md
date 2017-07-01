# util-date

Utilities to handle date, ts, microsec...etc. 

# Install

> npm install benpptung/util-date -S

# api

## systime(date, [unix, [dec]])

- date: can be
  // dateString: JSON.stringify(new Date())
  // timestamp: js or unix timestamp
  // js Date object
  
- unix : is.bool - is it an unix timestamp or not. default to false
- dec  : milliseconds, default to 0, range 0 - 6

## tsToDate(ts, [unix])

Accept date string, timestamp and convert into Date object. Return `false` if invalid arg.

## Others..

- dateToTs(date)
- isDate(date)

