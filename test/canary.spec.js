const chai = require('chai');

const should = chai.should();
const assert = require('chai').assert;

//Tests must be run from root
describe('Canary test', () => {
  it('the number 5 should be 5', () => {
    const five = 5;

    hello.should.be.equal(5);
  })

  it('typeof string should be string', () => {
    const str = 'string';

    assert.typeOf(str,'string');
  });
})
