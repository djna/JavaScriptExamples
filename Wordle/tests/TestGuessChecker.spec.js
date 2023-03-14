var should = require('chai').should();
import {WordChecker} from "../src/WordChecker";

var assert = require('assert');
describe('Word Checker', function() {
  describe('Solved', function() {
    it('identifies a correct solution', function() {
        let target = "RIGHT";
        let checker  = new WordChecker(target);     
        let guess = target; 
        let result = checker.check(guess);
       
        result.solved.should.be.true; 
        result.indicators.should.deep.equal([...target]);
        result.guess.should.equal(target);
    });
  });
  describe('Completely Wrong', function() {
    it('identifies a correct solution', function() {
        let target = "RIGHT";
        let checker  = new WordChecker(target);     
        let guess = "SOBAD"; 
        let result = checker.check(guess);
        let expected = "     "; // all wrong
       
        result.solved.should.be.false; 
        result.indicators.should.deep.equal([...expected]);
        result.guess.should.equal(guess);
    });
  });
  describe('Scrambled', function() {
    it('identifies all chars in wrong position', function() {
        let target = "RIGHT";
        let checker  = new WordChecker(target);     
        let guess = "IGHTR"; 
        let result = checker.check(guess);
        let expected = "ightr"; // lower case indicates wrong position
       
        result.solved.should.be.false; 
        result.indicators.should.deep.equal([...expected]);
        result.guess.should.equal(guess);
    });
  });
  describe('One Character', function() {
    it('identifies one char in correct position', function() {
        let target = "RIGHT";
        let checker  = new WordChecker(target);     
        let guess = "abche"; 
        let result = checker.check(guess);
        let expected = "   H "; // lower case indicates wrong position
       
        result.solved.should.be.false; 
        result.indicators.should.deep.equal([...expected]);
        result.guess.should.equal(guess);
    });
    it('identifies one char in wrong position', function() {
      let target = "RIGHT";
      let checker  = new WordChecker(target);     
      let guess = "habcd"; 
      let result = checker.check(guess);
      let expected = "h    "; // lower case indicates wrong position
     
      result.solved.should.be.false; 
      result.indicators.should.deep.equal([...expected]);
      result.guess.should.equal(guess);
  });
  });


  
});



  

  
