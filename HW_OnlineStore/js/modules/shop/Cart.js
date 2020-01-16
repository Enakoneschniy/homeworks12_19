class Cart {
    #products = [] // product = { price, quantity, ... }
    loadCart() {

    }
    addProduct(product) {
        const productIndex = this.#products.findIndex(p => p.id === product.id)
        if(productIndex === -1) {
            this.#products.push(product)
        } else {
            this.#products[productIndex].quantity += 1
        }
    }
    removeProduct(id) {
        const productIndex = this.#products.findIndex(p => p.id === id)
        this.#products.splice(productIndex, 1)
    }
    proceedToCheckout() {

    }
    get totalPrice() {
        return this.#products.reduce((s, p) => s + (p.price * p.quantity), 0)
    }
    get renderedSmallCart() {
        return ''
    }
    get renderedCart() {
        return ''
    }
}
