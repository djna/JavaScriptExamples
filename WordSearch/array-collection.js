
// Array based Collection - exploit JavaScript Array

class ArrayCollection {
    constructor(){   
        this.myArray = []; // starts empty, could pre-allocate with new Array(size)
    }


    // simple add at the end
    addItem(newItem){            
       this.myArray.push(newItem);
    }

    find(key){
        for ( let i = 0; i < this.size; i++){
             if ( this.myArray[i] === key  ){
                return key;
             }
        }
        return null;       
    }
    get size(){
        return this.myArray.length;
    }
};

module.exports = { 
    Collection: ArrayCollection
};
