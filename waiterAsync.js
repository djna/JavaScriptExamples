


// equiavlent of query helper, does some work and makes a callback
function workCall(input, callback) {
    // success - no err and a result
    callback(null, input + " OK");
}


// Promisify
// Wrap up the callback function as a Promise
function workCallPromise(input) {
    let workPromise = new Promise(
        (resolve, reject) => {
            workCall(input,
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        // keeping the (err, result) pattern used in original callback code
                        // this becaomes more useful when we get to async/await version
                        resolve([null, result]);
                    }
                }
            );
        }
    )
    return workPromise
}



// refactored callback work
// moved each piece of work to its own function


// original logic refactored to functions
// all are marked async so that we can await them
// strictly, we only need async if we return a Promise
async function  workWithFirstResult( firstResult){
    console.log("first ", firstResult)
    return workCallPromise(firstResult);  
}

async function workWithSecondResult( secondResult){
    console.log("Inner callback", secondResult)
    // more generally, here we could make another service call and get another promise to return
    // return conventional [error, result] array
    return [null, secondResult + " done"]; 
}

exampleUsingAwait();


// the then chain expressed using await
async function exampleUsingAwait(){
    let err, firstResult, secondResult, overallResult;

    [err, firstResult] = await workCallPromise("inAsync")

    if ( err ){
        console.log("Error from first step");
    } else {
        [err, secondResult] = await workWithFirstResult(firstResult)
    }

    if ( ! err ){
        [err, overallResult] = await workWithSecondResult(secondResult)
    }

    if ( err ){
         console.log("Failed ", err);
    } else {
        console.log("Overall result", overallResult);
    }
       
    
}




