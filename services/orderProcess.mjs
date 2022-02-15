
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
        
        let partnerPromises = [
            getQuote("Partner01", state.order),
            getQuote("Partner02", state.order),
            getQuote("Partner03", state.order),
        ];
        
        // TODO:

        // wait for partner responses
        // update state.quotes 
        // determine whether any valid responses received
        // select one valid quote (maybe cheapest?)
        // update state.acceptedQuote

        // return selected response
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