var should = require('chai').should();

import {Wordle} from "../src/Wordle";
var assert = require('assert');
describe('Checking Guesses', function() {
  describe('Correct Guess', function() {
    it('shows all correct', function() {
        let game  = new Wordle();     
        let guess = "RIGHT"; 

        let expected = 'RIGHT'; 

         game.check(guess).should.equal(expected);
    });
  });
  


});