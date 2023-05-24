



console.log("Hello Algorithms");


class Node {


    constructor(data, nextItem){
        this.myData = data;
        this.myNext = nextItem;
    }

    isLast(){
        return this.myNext;
    }

    get next(){
        return this.myNext;
    }

    get data(){
        return this.myData;
    }

    set next(nextItem){
        this.myNext = nextItem;
    }

    

}

// test methods
// let node1 = new Node("one", null);
// let node2 = new Node("two", node1);

// printNode(node1);
// printNode(node2);

// function printNode(node) {
//    console.log( "1: " + node.data + " then " +  (node.isLast() ? node.next.data : ":END:") ) ;
// }


module.exports = Node;

