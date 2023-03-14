var should = require('chai').should();
import {CountdownSong} from "../src/WordChecker";

var assert = require('assert');
describe('Range of verses', function() {
  describe('First and second', function() {
    it('selects verses 99 and 98', function() {
        let song  = new CountdownSong();     
        let songText = song.song(0, 98); 
        let expected = '99 cans of Lilt on the wall, 99 cans of Lilt.\n' +
        'Take one down and pass it around, 98 cans of Lilt on the wall.\n' +
        '\n' +
        '98 cans of Lilt on the wall, 98 cans of Lilt.\n' +
        'Take one down and pass it around, 97 cans of Lilt on the wall.\n'
       
        songText.should.equal(expected); 
    });
  });
  
});
describe('song length', function() {
  describe('First and second', function() {
    it('selects verses 999 and 998', function() {
        let song  = new CountdownSong(999);     
        let songText = song.song(0, 998); 
        let expected = '999 cans of Lilt on the wall, 999 cans of Lilt.\n' +
        'Take one down and pass it around, 998 cans of Lilt on the wall.\n' +
        '\n' +
        '998 cans of Lilt on the wall, 998 cans of Lilt.\n' +
        'Take one down and pass it around, 997 cans of Lilt on the wall.\n'
       
        songText.should.equal(expected); 
    });
  });
  describe('Reset to top', function() {
    it('three verses showing reset ', function() {
        let song  = new CountdownSong(2);     
        let songText = song.song(); 
        let expected = '2 cans of Lilt on the wall, 2 cans of Lilt.\n' +
        'Take one down and pass it around, 1 can of Lilt on the wall.\n' +
        '\n' +
        '1 can of Lilt on the wall, 1 can of Lilt.\n' +
        'Take it down and pass it around, no more cans of Lilt on the wall.\n' +
        '\n' +
        'No more cans of Lilt on the wall, no more cans of Lilt.\n' +
        'Go to the store and buy some more, 2 cans of Lilt on the wall.\n'
       
        songText.should.equal(expected); 
    });
  });

  

  
});