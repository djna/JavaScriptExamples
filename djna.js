

async function doWork() {
    let a = await able(10);
    let b = await baker(a.value);
    console.log("result ", b) ;
    return b;
}

let workResult = await doWork();

console.log("Work result ", workResult) ;

function able( aIn ){
    if ( aIn <= 0 ){
        return Promise.reject("able needs positive numbers");
    } else {
        return Promise.resolve( { name: "able", value: aIn * 23 });
    }
}

function baker( bIn ){
    let thePromise = new Promise(
        ( resolve, reject ) => 
            
            setTimeout(
                () => {
                    if ( bIn > 100){
                        resolve( { name:"baker", value: bIn % 7 } );
                    } else {
                        reject("baker needs values bigger than 100");
                    }
                }
             , 1000      
       )
    );

  return thePromise;
}