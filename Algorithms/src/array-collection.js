
// Array based Collection - exploit JavaScript Array

class ArrayCollection {
    constructor(key = "id"){
        
        this.myKey = key;
        this.myArray = []; // starts empty, could pre-allocate with new Array(size)
        this.myNextIndex = 0;
    }

    addItem(newItem){      
        this.myArray[this.myNextIndex++] = newItem;
    }

    find(key){
        
        // could use find(), do it long-hand
        for (  let i = 0 ; i < this.myNextIndex; i++){
            let candidate = this.myArray[i];
            if ( candidate[this.myKey] === key ) {
                return candidate;
            }
        }
        return null;
    }

    get size(){
        return this.myNextIndex;
    }
};

module.exports = { 
    Collection: ArrayCollection
};
