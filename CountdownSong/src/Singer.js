import {CountdownSong} from "./CountdownSong.js";

let countdownSong  = new CountdownSong();     
let songText = countdownSong.verses(99,98);
console.log("Singing ...\n" + songText +":::");
