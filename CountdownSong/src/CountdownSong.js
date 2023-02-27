
export class CountdownSong {

  // default to starting at 99, can specify any positive number
  constructor(start=99){
       this.upper = start;
  }

  // default to whole song, but can specify starting and ending verses
  song(skip = 0, end = 0) {
    if ( skip >= this.upper ){
      return `No song to sing if you skip ${skip} of ${this.upper}\n`;
    }
    
    let start = this.upper - skip;

    // treat request for a negative last verse as stopping at zero
    if ( end < 0 ){
        end = 0;
    }
    
    if ( end > start ){
      return "No song to sing if you end before you start\n";
    }
  
    return [...Array(1+start-end)]
    .map((value, index) => this.verse(start - index ))
    .join('\n');
  }

  actionText( number) {
    switch (number) {
        case 0: return 'Go to the store and buy some more, ';
        case 1: return 'Take it down and pass it around, ';
        default: return 'Take one down and pass it around, ';
    }
  }

  quantityText( number, capitalize = false) {
    let result;
    switch (number) {
        case 0: result = "no more cans";
                break;
        case 1: result =  "1 can";
                break;
        case 6: result =  "a six-pack";
                break;
        default: result = `${number} cans`;
    }

    let first = result.substring(0,1);
    let remainder = result.substring(1);
    return (capitalize ? first.toUpperCase() : first) + remainder;
  }

  nextQuantity(number){
    return number == 0 ? this.upper : number -1;
  }

  verse(number) {
  
      return (
        `${this.quantityText(number, true)} of Lilt on the wall, ` + 
        `${this.quantityText(number)} of Lilt.\n` +
        `${this.actionText(number)}` + 
        `${this.quantityText(this.nextQuantity(number))} of Lilt on the wall.\n`
      );
  
  }
}
