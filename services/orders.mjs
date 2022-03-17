

// Fake version of a function that obtains
// details of an order given its order id.
function getOrderValue(orderId) {
    // fake version of an axios() call
    //let orderPromise = new Promise(
      // TODO
      // add code to resolve promise with a fake order object
      // with fields such as orderid, customerid, value
      // or reject with an error 
    //);
 
    //return orderPromise;

    return Promise.reject("Not implemented");
  }
export { getOrderValue };