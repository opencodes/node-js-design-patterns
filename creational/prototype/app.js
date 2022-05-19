
const cart = require('./Cart');

let cart1 = cart.clone();
cart1.name = "Rajesh";
cart1.addItemToCart({ product: 'p3', price: 200 })

let cart2 = cart.clone();
cart2.name = "Rakesh";
cart2.addItemToCart({ product: 'p4', price: 200 })


console.log(`${cart1.name}: ${JSON.stringify(cart1.cartItems)}`);
console.log(`${cart2.name}: ${JSON.stringify(cart2.cartItems)}`);