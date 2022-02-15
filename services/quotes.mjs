
// 
// Fake version of a function that gets a Quote from a call
// to a business partner's REST service

// input: 
//     partnerId - an identifier of the partner 
//     order - object with order details such as a value
//             on which a commission could be computed
// returns:
//      a Promise that resolves with a quote object
//      or rejects with a reason
function getQuote(partnerId, order) {
    
    let quotePromise = new Promise(
      (resolve, reject) => {
        setTimeout (
          () => {
            // TODO
            // decide whether to succeed or fail - random? specific partner?
            // if failing 
            //      reject with a reason
            // otherwise 
            //      generate a quote object with fields such as
            //           partnerId, order, commission
            //      resolve with quote object
            const quote = "TODO"
            resolve( quote);
            console.log("getQuote has resolved promise ", quote);
          },
          100
        );  
      }
    );
    return quotePromise;
  }

export { getQuote };