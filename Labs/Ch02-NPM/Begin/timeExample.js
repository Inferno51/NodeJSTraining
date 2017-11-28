var moment = require('moment');
var moment_timezone = require('moment-timezone');
var current = moment();

console.log(moment("01012011", "MM-DD-YYYY").fromNow());
console.log(current.tz('America/New_York').format('ha z'));
console.log(current.tz('America/Los_Angeles').format('ha z'));
