
// Linked list minimal implementation

const  Node = require('./node.js');

class Collection {
    constructor(key = "id"){
        this.myHead = null;
        this.myKey = key;
    }

    addItem(newItem){
        let newNode = new Node(newItem, this.myHead);
        this.myHead = newNode;
    }

    find(key){
        // TODO 
        return null
    }

    get size(){
        // TODO
        return 0;
    }
};

module.exports = { 
    Collection: Collection
};
