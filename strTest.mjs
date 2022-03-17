

function whatIs( theName, something) {
    let theType = typeof something;
    console.log(theName + " has type "  + theType + " and value " + something);
}

let xPrimitive = "xxx";


let yString = new String("yyy")

let z = String("z");

whatIs( "xPrimitive", xPrimitive);
whatIs( "yString", yString);
whatIs( "z", z);

console.log(z.concat("help") );

console.log(xPrimitive.concat(":extra"));
//console.log( String.concat(xPrimitive, yString) );
console.log("primitively".concat(":extra"));

