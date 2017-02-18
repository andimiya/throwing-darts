const chai = require('chai');
const scoreThrows = require('../index');
const expect = chai.expect;
const should = chai.should();

let player1 = [1, 5, 11];  // return 15
let player2 = [15, 20, 30]; // return 0
let player3 = [1, 2, 3, 4]; // return 140

describe('Dart Scores', function() {
  it('Player 1 should have thrown 3 times', function() {
    expect(player1).to.have.length(3);
  });
  it('Player 1 should have a total score of 15', function() {
    expect(scoreThrows(player1)).to.equal(15);
  });
  it('Player 2 should have a total score of 0', function() {
    expect(scoreThrows(player2)).to.equal(0);
  });
  it('Player 3 should have a total score of 140', function() {
    expect(scoreThrows(player3)).to.equal(140);
  });
});
