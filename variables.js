whatIs( "whatis", whatIs );

let x;
whatIs( "declared x", x );

x = 2;
whatIs( "numeric x", x );

let y = 4;
whatIs( "defined y", y);

x += y;
whatIs( "added y to x ", x );

y = "5";

x += y ;
whatIs( "added another y to x ", x );

o = { 
    myValue : 75, 
    valueOf: function () { 
        return this.myValue; 
    } 
};

x = 5;
x = 5 + o;
whatIs( "added an object to numeric x ", x );

function whatIs( theName, something) {
    let theType = typeof something;
    console.log(theName + " has type "  + theType + " and value " + something);
}