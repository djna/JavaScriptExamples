var fs = require("fs");

// usage: node main.js [howMany] [multiplier]
// example: node main.js 150 3
//
// loads requested number of items into a collection, generating additional fake titles
// reports how long load takes
// retrieves some items from the collection
// reports how long find takes

// uncomment one of these to select a list implementation

// Linked List
//const  { Collection } = require('./list-collection.js');

// Array List
const  { Collection } = require('./array-collection.js');

// parameters from command line, with suitable defaults

let bookCollection = new Collection();

let howMany = parseInt(process.argv[2]);
if ( ! howMany ){
    howMany = 5;
}

var wordArray = fs.readFileSync("./words.txt").toString('utf-8').split("\n");


let startTime = new Date();
wordArray.forEach(element => {
    bookCollection.addItem(element)
});
let endTime = new Date();
console.log("Load elapsed = " + (endTime - startTime) + "ms");


console.log("bookCollection - " + bookCollection.size + " items" );

// time how long to find a book in the middle of the collection
startTime = new Date();
for (let i = 0; i < howMany; i++){
    // find an arbitrary book
    let target = wordArray[ Math.floor(Math.random() * wordArray.length)];
    let found = bookCollection.find( target );
    //console.log("Found " + found);
}

endTime = new Date();
console.log(`Find ${howMany} repetitions, elapsed = ${(endTime - startTime)}ms`);


