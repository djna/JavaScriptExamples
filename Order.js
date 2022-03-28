

function Order(item, quantity) {

    this.item = item;
    this.quantity = quantity;

}

Order.prototype.getValue = function(){
    return this.item.price * this.quantity;
}

Order.prototype.getSummary = function(){
    return "Order for " + this.quantity + " of " + this.item.description + ", value " + this.getValue();
}

let specialSocks = {
    description : "Nordic Socks",
    price : 5
}

let boringSocks = {
    description : "Grey Socks",
    price : 2
}

let specialOrder = new Order(specialSocks, 4);

console.log("Special Order ", specialOrder.getSummary());

specialOrder.item = boringSocks;

console.log("Special Order ", specialOrder.getSummary());




