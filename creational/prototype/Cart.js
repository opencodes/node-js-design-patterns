class Cart {
    constructor(name = 'unnamed person') {
        this._name = name;
        this.cartTotal = 0;
        this.cartItems = []
    }

    set name (value) {
        this._name = value;
    }

    get name () {
        return this._name;
    }


    addItemToCart (item) {
        this.cartTotal += item.price || 0;
        this.cartItems.push(item)
    }

    getCartTotal () {
        return this.cartTotal;
    }

    clone () {
        const proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        cloned._name = this._name;
        cloned.cartItems = [...this.cartItems];
        return cloned;
    }
}
let cart = new Cart();
cart.addItemToCart({ product: "Product 1", price: 100 })
cart.addItemToCart({ product: "Product 2", price: 100 })
cart.addItemToCart({ product: "Product 3", price: 100 })

module.exports = cart;