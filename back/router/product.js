const express = require('express')
const { getAllProductsC,addProductC } = require('../controller/product')
const {auth, authAdmin} = require('../middleware/auth')

const userRouter = express.Router()

userRouter.get('/products', getAllProductsC)
userRouter.get('/productsA',authAdmin, getAllProductsC)
userRouter.get('/productsA/:id',authAdmin, getAllProductsC)
userRouter.get('/products/:id', getAllProductsC)
userRouter.post('/addProduct',authAdmin, addProductC)

module.exports = userRouter