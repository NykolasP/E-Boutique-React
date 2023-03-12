const { getAllProducts, addProduct,getAllProductsByCategory,getProductByReference,deleteProductById } = require('../model/products')
const { getAllCategory,getCategoryById,addCategory,deleteCategoryById,addCategoryProduct } = require('../model/category')
const ProductC = require("../classes/product")

async function getAllProductsC(req, res) {
    const products = await getAllProducts();
    res.json(products)
}

async function addProductC(req, res) {
    if (!req.body.name || !req.body.reference || !req.body.price || !req.body.category) {
        res.status(400).json({ mess: "Champs obligatoires : Nom, reference, Prix, categorie" })
        return 
    }
    
    const product = addProduct(req.body.reference, req.body.name, req.body.price, req.body.resume, req.body.description);

    getProductByReference(req.body.reference).then((data) => {
        addCategoryProduct(data.id,req.body.category)
        res.json(product)
    })
    
}
async function deleteProductC(req, res) {
   const deleteP =  deleteProductById(req.params.id);
   res.json(deleteP)
}

module.exports = { getAllProductsC, addProductC,deleteProductC }