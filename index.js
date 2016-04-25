'use strict';

var toString      = require('to-str');
var randomLorem   = require('random-lorem');
var randomDoamins = require('random-domains');


module.exports = function (options) {
  var domain = options && options.domain
    ? toString(options.domain)
    : randomDoamins();

  return randomLorem() + '@' + domain;
};
