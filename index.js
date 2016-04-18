'use strict';

var toString      = require('to-str');
var randomLorem   = require('random-lorem');
var randomDoamins = require('random-domains');


module.exports = function (domain) {

  domain = domain && toString(domain) || randomDoamins();

  return randomLorem() + '@' + domain;
};
