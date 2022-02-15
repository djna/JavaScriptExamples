

import { OrderProcess } from './services/orderProcess.mjs';

console.log("Quote Me starting ...");

let firstOrderProcess = new OrderProcess(23);
let secondOrderProcess = new OrderProcess(64);

// note: console.log does not directly call toString()
// using ""+object will coerce using toString()
console.log("firstOrderProcess: " + firstOrderProcess );

console.log("secondOrderProcess: " + secondOrderProcess );

try {
    let quote = await firstOrderProcess.placeOrder();
    console.log("firstOrderProcess quote: " + quote );
} catch(e) {
    console.log("failed to place order " + firstOrderProcess, e);
}

