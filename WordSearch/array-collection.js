
// Array based Collection - exploit JavaScript Array

class ArrayCollection {
    constructor(){   
        this.myArray = []; // starts empty, could pre-allocate with new Array(size)
    }


    addItem(newItem){            
       this.myArray.push(newItem);
    }

    locate(key){
       
        if ( this.myArray.length <= 0){
            return {
                found : false,
                insertionPoint : 0
            }
        }

        let left = 0;
        let right = this.myArray.length - 1;
        let candidateIndex;
        while ( left <= right){
            candidateIndex = Math.floor( (left + right) / 2);
            let candidateItem = this.myArray[candidateIndex];
            if ( candidateItem == key ){
                return {
                    found : true,
                    item : this.myArray[candidateIndex],
                    index : candidateIndex
                }
            } else if ( candidateItem > key ){
                right = candidateIndex -1;
            } else {
                left = candidateIndex + 1;
            }
        }

       
        return {
            found : false,
            insertionPoint : left 
        }
        

    }

    find(key){
        
        let location = this.locate(key);
        return location.item;
        
    }

    delete(key){
        
        let location = this.locate(key);
        if ( location.found){
            this.myArray.splice(location.index, 1);
            return location.item;
        } else {
            return null;
        }
            
    }

    get size(){
        return this.myArray.length;
    }
};

module.exports = { 
    Collection: ArrayCollection
};
