

function Order(item, quantity) {

    // remember this as a closure
    const myself = this;

    this.item = item;
    this.quantity = quantity;

    return {
        getValue : function() { return myself._getValue() },
        getSummary: function() { return myself._getSummary() }
    }
}

Order.prototype._getValue = function(){
    return this.item.price * this.quantity;
}

Order.prototype._getSummary = function(){
    return "Order for " + this.quantity + " of " 
    + this.item.description + ", value " 
    + this._getValue();
}

export { Order }


