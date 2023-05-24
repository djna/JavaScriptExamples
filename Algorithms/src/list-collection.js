
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
        if (this.myHead == null ){
            return null;
        }

        let currentNode = this.myHead;
        while ( currentNode.data[this.myKey] !== key  ){
            if (currentNode.next == null ){
                return null;
            }
             currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    get size(){
        let theSize = 0;
        let currentNode = this.myHead;
        while ( currentNode ){
             theSize++;
             currentNode = currentNode.next;
        }
        return theSize;
    }
};

module.exports = { 
    Collection: Collection
};
