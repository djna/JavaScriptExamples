


function getOrderValue(orderId) {
    // fake version of an axios() call
    let orderPromise = new Promise(
      (resolve) => {
        setTimeout (
          () => {
            const value = Math.floor(orderId * Math.random() * 100);
            const order = { "id" : orderId, "customer" : "dummy:"+orderId, "value" : value};
            resolve( order);
            console.log("getOrderValue has resolved promise ", order);
          },
          1000
        );
   
      }
    );
 
    return orderPromise;
  }


  
export { getOrderValue };