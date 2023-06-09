const express = require('express')
const { getAllUser,connectUser, addUserC, getUser,deleteUser, updateUserC } = require('../controller/user')
const {auth, authAdmin} = require('../middleware/auth')

const userRouter = express.Router()

userRouter.get('/users',authAdmin, getAllUser)
userRouter.post('/register', addUserC)
userRouter.post('/connect', connectUser)
userRouter.get('/profil',auth ,getUser)
userRouter.post('/editp',auth ,updateUserC)
userRouter.get('/delete',auth, deleteUser)

module.exports = userRouter