

// Test program driving the Order Process

import { OrderProcess } from './services/orderProcess.mjs';

console.log("Quote Me starting ...");

let orderProcess = new OrderProcess(23);

// note: console.log does not directly call toString()
// using ""+object will coerce using toString()
console.log("firstOrderProcess: " + orderProcess );

try {
    let quote = await orderProcess.placeOrder();
    console.log("firstOrderProcess quote: ", quote );
} catch(e) {
    console.log("failed to place order " + orderProcess, e);
}

