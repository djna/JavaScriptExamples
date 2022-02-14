


function getQuote(partnerId, order) {
    // fake version of an axios() call
    let quotePromise = new Promise(
      (resolve, reject) => {
        setTimeout (
          () => {
            if (Math.random() > 0.01 ){
                 reject("no quote");
                 return;
            }
            const commission = Math.floor( order.value * Math.random() * 0.1 );
            const quote = { "partnerId" : partnerId, "order" : order, "commission" : commission};
            resolve( quote);
            console.log("quote has resolved promise ", quote);
          },
          100
        );
   
      }
    );
 
    return quotePromise;
  }


  
export { getQuote };