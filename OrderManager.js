
import { Order } from "./Order.mjs";

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

