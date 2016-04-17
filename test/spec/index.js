var expect = require('chai').expect;


describe('random-email: ', function () {

  var randomEmail = require('../../');

  it('randomEmail()', function () {
    expect(randomEmail()).to.be.a('string');
    expect(randomEmail()).to.be.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
  });
});
