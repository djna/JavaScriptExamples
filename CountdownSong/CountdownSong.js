
export class CountdownSong {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
  
    return [...Array(1+upper-lower)]
      .map((value, index) => this.verse(upper - index ))
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
        '1 cans of Lilt on the wall.\n'
      );
      default: return (
        `${number} cans of Lilt on the wall, ` + `${number} cans of Lilt.\n` +
        'Take one down and pass it around, ' + `${number - 1} cans of Lilt on the wall.\n`
      );
    }
  }
}
