


let characters = "abc";
let desiredLength = 5;
let theSet = [...Array(desiredLength).keys()].reduce( 
    ( previousResult) => 
        [...previousResult.flatMap(
            (oneString) => [...characters].map( c => oneString + c )
        )]
    , [""]   
);


console.log('result ', theSet);

function extendMapper(extendThis, characters) {

    return [...characters].map(c => extendThis + c);

}