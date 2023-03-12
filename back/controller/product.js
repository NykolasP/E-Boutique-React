const { getAllProducts, addProduct,getAllProductsByCategory } = require('../model/products')
const { getAllCategory,getCategoryById,addCategory,deleteCategoryById } = require('../model/category')
const ProductC = require("../classes/product")

async function getAllProductsC(req, res) {
    const products = await getAllProducts();
    res.json(products)
}

async function addProductC(req, res) {
    if (!req.body.name || !req.body.reference || !req.body.price) {
        res.status(400).json({ mess: "Champs obligatoires : name, reference, price" })
        return 
    }
    const product = new ProductC(req.body.reference, req.body.name, req.body.price, req.body.resume, req.body.description);
    product.addProduct();
    res.json(product)
}

module.exports = { getAllProductsC, addProductC }