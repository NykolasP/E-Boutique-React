const { getAllCategory,getCategoryById,addCategory,deleteCategoryById } = require('../model/category')
const { getAllProductsByCategory } = require('../model/products')

async function getAllCategoryC(req, res) {
    const category = await getAllCategory();
    res.json(category)
}

async function getAllProductsByCategoryC(req, res) {
    if (!req.params.id){
        res.status(400).json({ mess: "id besoin" })
        return
    }
    const products = await getAllProductsByCategory(req.params.id);
    res.json(products)
}

module.exports = { getAllCategoryC,getAllProductsByCategoryC }