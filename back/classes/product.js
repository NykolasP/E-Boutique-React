const { addProduct } = require("../model/products")

class Product {
    #id
    #reference
    #name
    #price
    #resume
    #description

    constructor(reference,name,price,resume,description,id = null) {
        this.#id = id
        this.#reference = reference
        this.#name = name
        this.#price = price
        this.#resume = resume
        this.#description = description
    }

    addProduct() {
        addProduct(this.#reference, this.#name, this.#price, this.#resume, this.#description)
    }
}