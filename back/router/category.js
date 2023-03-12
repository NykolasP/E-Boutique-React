const express = require('express')
const { getAllCategoryC,getAllProductsByCategoryC } = require('../controller/category')
const { ge } = require('../controller/product')
const {auth, authAdmin} = require('../middleware/auth')

const userRouter = express.Router()

userRouter.get('/category', getAllCategoryC)
userRouter.get('/category/:id', getAllProductsByCategoryC)
userRouter.post('/addCategory',authAdmin, )

module.exports = userRouter