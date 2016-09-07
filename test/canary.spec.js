const chai = require('chai');

const should = chai.should();
const assert = require('chai').assert;

//Tests must be run from root
describe('Canary test', () => {
  it('the string hello should be hello', () => {
    const hello = 'hello';

    hello.should.be.equal('hello');
  })

  it('typeof string should be string', () => {
    const str = 'string';

    assert.typeOf(str,'string');
  });
})
