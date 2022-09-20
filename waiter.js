


// equiavlent of query helper, does some work and makes a callback
function workCall(input, callback) {
    // success - no err and a result
    callback(null, input + " OK");
}

// example of a single call
workCall("Single",
    (err, result) => {
        if (err) {
            console.log("Failed ", err);
        } else {
            console.log("result:", result)
        }
    }
)

workCall("Example data",
    function (err, result){
        if (err) {
            console.log("Failed ", err);
        } else {
            console.log("result:", result)
        }
    }
)

// example a making another call inside callback
// already harder to read
workCall("CallbackInCallback",
    (err, result2) => {
        if (err) {
            console.log("Failed ", err);
        } else {
            // callback inside callback
            console.log("innner, call second with", result2)
            workCall(result2,
                (err, result3) => {
                    if (err) {
                        console.log("Failed ", err);
                    } else {
                        console.log("result from second", result3)
                    }
                }
            );
        }
    }
);



