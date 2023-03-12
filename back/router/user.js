const express = require('express')
const { getAllUser,connectUser, addUserC } = require('../controller/user')
const {auth, authAdmin} = require('../middleware/auth')

const userRouter = express.Router()

userRouter.get('/users',authAdmin, getAllUser)
userRouter.post('/register', addUserC)
userRouter.post('/connect', connectUser)

module.exports = userRouter