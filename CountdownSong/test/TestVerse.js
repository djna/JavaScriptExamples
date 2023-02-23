import {CountdownSong} from "../CountdownSong.js";
var assert = require('assert');
describe('Verse variations', function() {
  describe('First Verse', function() {
    it('shows starting number of cans', function() {
        let song  = new CountdownSong();     
        let verseText = song.verse(99); 
        let expected = '99 cans of Lilt on the wall, 99 cans of Lilt.\n' +
        'Take one down and pass it around, 98 cans of Lilt on the wall.\n';   
         assert.equal(verseText, expected);
    });
  });
  describe('Last Verse', function() {
    it('shows no cans, buy some more', function() {
        let song  = new CountdownSong();     
        let verseText = song.verse(0); 
        let expected = 'No more cans of Lilt on the wall, no more cans of Lilt.\n' +
        'Go to the store and buy some more, 99 cans of Lilt on the wall.\n';   
         assert.equal(verseText, expected);
    });
  });

});