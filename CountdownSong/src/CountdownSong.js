
export class CountdownSong {

  constructor(){
       this.upper = 99;
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

  verse(number) {
    switch (number) {
      case 0: return (
        'No more cans of Lilt on the wall, ' +
        'no more cans of Lilt.\n' +
        'Go to the store and buy some more, ' +
        '99 cans of Lilt on the wall.\n'
      );
      case 1: return (
        '1 can of Lilt on the wall, ' +
        '1 can of Lilt.\n' +
        'Take it down and pass it around, ' +
        'no more cans of Lilt on the wall.\n'
      );
      case 2: return (
        '2 cans of Lilt on the wall, ' +
        '2 cans of Lilt.\n' +
        'Take one down and pass it around, ' +
        '1 can of Lilt on the wall.\n'
      );
      default: return (
        `${number} cans of Lilt on the wall, ` + `${number} cans of Lilt.\n` +
        'Take one down and pass it around, ' + `${number - 1} cans of Lilt on the wall.\n`
      );
    }
  }

}
