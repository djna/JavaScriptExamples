

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

// Some data
const  bookList = require('./mockBooks.js');

// parameters from command line, with suitable defaults
let howMany = parseInt(process.argv[2]);
if ( ! howMany ){
    howMany = 5;
}
if ( howMany > bookList.length ){
    howMany = bookList.length;   
}
console.log("Using " + howMany  + " items from " + bookList.length + " data set.");

let multiplier = parseInt(process.argv[3]);
if ( ! multiplier ){
    multiplier = 2;
}

let bookCollection = new Collection();

let startTime = new Date();

// mock data contains some data items, we generate additional records
// by adding prefix to the title, each generated record needs a unique id
// initialise an id for the generated records, higher than the last real record
// we will increment this generated id as we generate records.
let extraId = howMany + 1;
for ( let i = 0; i < howMany && i < bookList.length ; i++){
     bookCollection.addItem(bookList[i]);
     // generate copies, as many as specified on command line
     for ( let extra = 1; extra < multiplier; extra++){
         // copy based on real record
         let extraBook = Object.assign({}, bookList[i] );
         // amend title and id
         extraBook.id = extraId; 
         extraBook.title = extraId + " - " + extraBook.title ;
         extraId++;
         bookCollection.addItem(extraBook);
     }
}

let endTime = new Date();
console.log("Load elapsed = " + (endTime - startTime) + "ms");

console.log("bookCollection - " + bookCollection.size + " items" );

// find an arbitrary book
let target = howMany + 2

let deletedItem = bookCollection.delete( target);
if ( deletedItem ){
    console.log("deleted item " + target + " " + JSON.stringify(deletedItem) );
} else {
    console.log("No " + target + " to delete " );
}

console.log("bookCollection after delete - " + bookCollection.size + " items" );

let shouldNotBeThere = bookCollection.find( target );
if ( shouldNotBeThere ) {
    console.log("book unexpectedly found " + target + " " + JSON.stringify(shouldNotBeThere));
} else {
    console.log("book " + target + " not present, as expected.");
}

let noItem = bookCollection.delete( target);
if ( noItem ){
    console.log("unexpected deleted item " + target + " " + JSON.stringify(noItem) );
} else {
    console.log("No " + target + " to delete now, already was deleted. " );
}



