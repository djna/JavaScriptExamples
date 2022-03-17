

 s = "dave";
 t = s;
 s = "lin";

 t = null;




function calculate(receivedObject){
    console.log("receivedObject = ", receivedObject);

    receivedObject.x = 199;

    console.log("after calculation receivedObject = ", receivedObject);
}

let objectA = {
    x: 8
};

let objectB= objectA;

console.log("initial ObjectA = ", objectA);

objectB.x = 35;
console.log("after changing objectB, ObjectA = ", objectA);

calculate(objectA);

console.log("after calculation  ObjectB = ", objectB);





