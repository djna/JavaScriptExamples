

let x = 7;

whatIs("x", x);

let xo = Number(x);

whatIs("xo", xo);

let s = x.toString();

let sp = "abc";
let sc = new String("abc");

whatIs("sp", sp);
let p = Object.getPrototypeOf(7);
whatIs("sc", sc);

console.log("equal " + (sp === sc) );

console.log( "x = " + x.toString() );
console.log( "xo = " + xo.toString() );

function whatIs( theName, something) {
    let theType = typeof something;
    console.log(theName + " has type "  + theType + " and value " + something);
}