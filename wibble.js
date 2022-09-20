


let promiseOne = Promise.reject( { name: "able", value: 98});



promiseOne.then(
    ( result ) => console.log("promiseOne: ", result)
).catch(e => console.log("caught 1 ", e));;

promiseOne.then(
    ( goodResult ) => console.log("promiseOne, success: ", goodResult),
    ( rejected ) => console.log("promiseOne, reject: ", rejected)
)

promiseOne.catch( 
    ( caught ) => console.log("promiseOne, caught: ", caught)
);

