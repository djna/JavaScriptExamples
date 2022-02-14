
import { getOrderValue } from './services/orders.mjs';
import { getQuote } from './services/quotes.mjs';


let orderManager = new function( customerId ){

    this.toString = 
        "orderManager for " + customerId;
}

console.log(orderManager);
/*
const order1 = getOrderValue(10);

order1.then( 
    (orderDetails) => { 
        console.log("Order details ", orderDetails);

        return selectQuote( orderDetails);
       
    } 
).catch(function (error) {
    console.log("Something went wrong " + error);
});

console.log("End of initialisation, about to yield ... ");

setTimeout ( () => console.log("Shutting down ..."), 5000);

function selectQuote(orderDetails){
     return getQuote(77, orderDetails).then(
        (quote) => {
            console.log("Quote  ", quote);
        }
    ).catch(function (error) {
        console.log("quote went wrong " + error);
    });
}
*/

