
import { getOrderValue } from './orders.mjs';
import { getQuote } from './quotes.mjs';


let OrderProcess =  function( orderId ){

    let state = {
        orderId: orderId,
        order : null,
        quotes: [],
        acceptedQuote: null
    }
    
    this.placeOrder = async function(){
        console.log("place order for ", orderId);

        state.order = await getOrderValue(state.orderId);
        
        state.quotes.push[await getQuote("dummyPartner", state.order)];
        // TODO select a quote, and handle empty array
        return quote[0];
    }

    // enough to display current state
    this.getStateSummary = function() {
        return JSON.stringify(state);
    }

    // add accessors here
}

OrderProcess.prototype.toString = function() {
     return this.getStateSummary();
} 
export { OrderProcess }