
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
        let settledPromises = await Promise.allSettled(partnerPromises);

        let successPromises = settledPromises.filter(
            (i) => {
                return i.status === "fulfilled";
            }
        )

        let selectedQuote = successPromises.reduce(
            (prev, current) => {
                return current?.value.commission 
                            <=  (prev?.value.commission ?? current?.value.commission) 
                            ? current : prev; 
                           
            }, null
        )

        if (! selectedQuote){
            throw "No valid quote for " + orderId;
        }

        // TODO select a quote, and handle empty array
        return selectedQuote.value;
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