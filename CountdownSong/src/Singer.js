import {CountdownSong} from "./CountdownSong.js";

let countdownSong  = new CountdownSong();     
let songText = countdownSong.song();
console.log("Singing ...\n" + songText);
