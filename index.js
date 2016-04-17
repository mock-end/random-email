'use strict';

var randomLorem   = require('random-lorem');
var randomDoamins = require('random-domains');


module.exports = function () {
  return randomLorem() + '@' + randomDoamins();
};
