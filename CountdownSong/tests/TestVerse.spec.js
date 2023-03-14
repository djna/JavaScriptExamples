var should = require('chai').should();

import {CountdownSong} from "../src/CountdownSong";
var assert = require('assert');
describe('Verse variations', function() {
  describe('First Verse', function() {
    it('shows starting number of cans', function() {
        let song  = new CountdownSong();     
        let verseText = song.verse(99); 

        let expected = '99 cans of Lilt on the wall, 99 cans of Lilt.\n' +
        'Take one down and pass it around, 98 cans of Lilt on the wall.\n'; 

         verseText.should.equal(expected);
    });
  });
  describe('Last Verse', function() {
    it('shows no cans, buy some more', function() {
        let song  = new CountdownSong();     
        let verseText = song.verse(0); 
        let expected = 'No more cans of Lilt on the wall, no more cans of Lilt.\n' +
        'Go to the store and buy some more, 99 cans of Lilt on the wall.\n';   
        verseText.should.equal(expected);
    });
  });
  describe('Two Cans Verse', function() {
    it('shows two cans (plural) and one can (singular)', function() {
        let song  = new CountdownSong();     
        let verseText = song.verse(2); 
        let expected = '2 cans of Lilt on the wall, 2 cans of Lilt.\n' +
        'Take one down and pass it around, 1 can of Lilt on the wall.\n';   
        verseText.should.equal(expected);
    });
  });
  describe('One Can Verse', function() {
    it('shows one cans (singular) and no more cans', function() {
        let song  = new CountdownSong();     
        let verseText = song.verse(1); 
        let expected = '1 can of Lilt on the wall, 1 can of Lilt.\n' +
        'Take it down and pass it around, no more cans of Lilt on the wall.\n';   
        verseText.should.equal(expected);
    });
  });

});