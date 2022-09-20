


// equiavlent of query helper, does some work and makes a callback
function workCall(input, callback) {
    // success - no err and a result
    callback(null, input + " OK");
}

// Step 1 - Promisify
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

// simple use of the Promise wrapper
workCallPromise("SinglePromise").then(
    ([err, result]) => {
        if ( err ){
            console.log("Simple Failed", err)
        }
        console.log("Simple result:", result)
    }
).catch(
    err => console.log("Failed ", err)
)
// original nested callback example
// implemented using Promisified worker. Note: code is largely 
// unchanged, still using the (err, result) pattern, even
// though most errors would not trigger then(), instead we'd
// reject to a catch(). However this pattern is useful later in async.
workCallPromise("PromiseChain").then(
    ([err, chainResult1]) => {
        if (err) {
            console.log("PromiseChain failed ", err);
        } else {
            // callback inside callback
    ([err, chainResult1]) => {
            console.log("PromiseChain callback", chainResult1);
            workCallPromise(chainResult1).then(
                ([err, chainResult2]) => {
                    if (err) {
                        console.log("PromiseChain inner failed ", err);
                    } else {
                        console.log("PromiseChain inner callback", chainResult2)
                    }
                }
            );
        }
    
        }
    }
);

// refactored callback work
// moved each piece of work to its own function

workCallPromise("Refactored").then(
    ([err, refactorResult1]) => workWithFirstResult(refactorResult1)
).then(
    ([err, refactorResult2]) => workWithSecondResult(refactorResult2)
).then(
    ([err, refactorResult3]) => console.log("overall result", refactorResult3)
).catch(
    err => console.log("Failed ", err)
)

// original logic refactored to functions
// all are marked async so that we can await them
// strictly, we only need async if we return a Promise
function  workWithFirstResult( firstResult){
    console.log("first ", firstResult)
    return workCallPromise(firstResult);  
}

function workWithSecondResult( secondResult){
    console.log("Code from inner callback", secondResult)
    // more generally, here we could make another service call and get another promise to return
    // in this example return conventional [err, result] array
    return [null, secondResult + " done"]; 
}

