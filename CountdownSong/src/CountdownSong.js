
export class CountdownSong {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
  
    return [...Array(1+upper-lower)]
      .map((value, index) => this.verse(upper - index ))
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
    return number == 0 ? 99 : number -1;
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
