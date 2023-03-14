
export class WordChecker {

  // default to starting at 99, can specify any positive number
  constructor(target){
       this.target = target.toUpperCase();
  }

  
  check( guess ) {
    
    let solved = ( guess.toUpperCase() === this.target );
    let upperGuess = guess.toUpperCase();
    let indicators = [...upperGuess].map(
            (guessChar, index) => {
              if ( index > this.target.length ) {
                  return ">"; // indicator we're off the end
              }
              let targetChar = this.target.charAt(index);
              if ( guessChar === targetChar) {
                  return targetChar;
              } 
              return  ( this.target.indexOf(guessChar) >= 0 ) ? guessChar.toLowerCase() : " "; 
            }
    );

    return {
      "solved" : solved,
      "guess" : guess,
      "indicators" : indicators
    }

  }

  


  
}
