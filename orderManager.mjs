
import { getOrderValue } from './services/orders.mjs';
import { getQuote } from './services/quotes.mjs';


function OrderManager(orderId) {
    this.orderId = orderId;
    
     this.processOrder = function (){
        getOrderValue(this.orderId).then(
            (order) => this.getQuotes(order) 
        ).then(
            (quotes) => this.acceptQuote(quotes)
        ).catch(
            (e) => console.log("error: ", e)
        );
        
     };

    this.getQuotes = function( order ){
        this.order = order; // update model
        console.log("quote for ", this.order);

        // return promise

        let qPromises = [12,34,56, 78, 100].map(
           (partner) => getQuote(partner, order)
        );
        
        return Promise.allSettled(qPromises);
     };

     this.acceptQuote = function( quotes ) {
        console.log("accept one of ", quotes);
     };
  
}


let myOrderManager = new OrderManager(45);

console.log(myOrderManager);

myOrderManager.processOrder();

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

