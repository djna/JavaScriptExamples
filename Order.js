

function Order(item, quantity) {
    this.getValue = function(){
        return item.price * quantity;
    }

    this.getSummary = function(){
        return "Order for " + item.quantity + " of " + item.description + ", value " + this.getValue();
    }
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




