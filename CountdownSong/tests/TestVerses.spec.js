import {CountdownSong} from "../src/CountdownSong.js";

var assert = require('assert');
describe('range of verses', function() {
  describe('First and second', function() {
    it('selects verses 99 and 98', function() {
        let song  = new CountdownSong();     
        let songText = song.verses(99,98); 
        let expected = '99 cans of Lilt on the wall, 99 cans of Lilt.\n' +
        'Take one down and pass it around, 98 cans of Lilt on the wall.\n' +
        '\n' +
        '98 cans of Lilt on the wall, 98 cans of Lilt.\n' +
        'Take one down and pass it around, 97 cans of Lilt on the wall.\n'
       
        assert.equal(songText, expected); 
    });
  });
  
});