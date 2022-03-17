

let b = 2n ** 10_000n;
 
whatIs("b", b);


let binary = 0b1101_0001n;

whatIs("binary", binary);

let i = Number(b) / 2;

whatIs("i", i)

let veryBig = BigInt(Number.MAX_SAFE_INTEGER);

for ( let count = 0; count < 4; count++){
    veryBig++;
    whatIs("veryBig", veryBig);

    i = Number(veryBig);
    whatIs("i", i)
}

function whatIs( theName, something) {
    let theType = typeof something;
    let length = ("" + something).length;
    console.log(theName + " has type "  + theType + " and value " + something + ", " + length );
}
