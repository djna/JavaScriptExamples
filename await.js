
import to from 'await-to-js';
// convenience 
let myto = to.default;


async function what() {
let promiseOne = Promise.resolve( { name: "able", value: 98});

let result = await promiseOne;

console.log("Result ", JSON.stringify(result) );
}

//what();

async function doWork() {
    let err, a, b;

    [err, a] = await myto (able(1) );

    if ( a ) {
       [err, b] = await myto(baker(a.value));
    }

    if (err){
        console.log("FFDC error: ", err)
        // could attempt some alternative processing here
        // or simply propogate the error
        return [err];
    } 
  
    console.log("recovery processing here")
    
    return [err, b];
}

try {
   let [err, workResult] = await doWork();
   if ( err ) {
       console.log("Worker failed ", err) ;
   } else {
       console.log("Work result ", workResult) ;
   }
} catch(e) {
     console.log("catch after call", e); 
};




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