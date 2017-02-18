const index = require('../index');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

describe('ScoreThrows', function() {
  it('should be a function', function() {
    expect(scoreThrows).to.be.a('function');
  });
});