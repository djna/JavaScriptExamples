

import { simplyWait } from './promises/simplewaiter.mjs';

    let initialPromise = new Promise(failExecutor);
    let waiterPromise = simplyWait( initialPromise, "initial" );
    let resultPromise = simplyWait( waiterPromise, "waiter" ).catch(
              e => console.log("ended with catch ", e)
    );
    
    



function successExecutor( resolve, reject ){
    resolve("success");
}

function failExecutor( resolve, reject ){
    reject("will not");
}

function throwExecutor( resolve, reject ){
    throw "cannot";
}