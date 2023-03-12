const { getAllUsers, getUserByEmail, getUserRoleByEmail, addRoleToUser, deleteUserByEmail, updateUser } = require('../model/users')
const UserC = require("../classes/user")
const jwt = require('jsonwebtoken');

async function getAllUser(req, res) {
    const users = await getAllUsers();
    res.json(users)
}

async function getUser(req, res) {
    const user = await getUserByEmail(req.user.email);
    res.json(user)
}

async function deleteUser(req, res) {
    const user = await deleteUserByEmail(req.user.email);
    res.json("Done")
}

async function addUserC(req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({ mess: "Champs obligatoires : email et pass" })
        return
    }
    const user = new UserC(req.body.surname,req.body.name,req.body.email,req.body.password);
    user.addUserBD();
    getUserByEmail(req.body.email).then((data)=> {
        addRoleToUser(data.id,2)
    })
    res.json(user)
}

async function updateUserC(req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({ mess: "Champs obligatoires : email et pass" })
        return
    }
    const user = updateUser(req.body.surname,req.body.name,req.body.email,req.body.password,req.user.id);
    res.json(user)
}

async function connectUser(req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({ mess: "Erreur : email et password" })
        return
    }
    const user = await getUserByEmail(req.body.email)

    if (!user || user.password != req.body.password) {
        res.status(403).json({ mess: "utilisateur ou mot de passe incorrect" })
        return
    }
    const roles = await getUserRoleByEmail(user.email);

    var token = jwt.sign({ ...user,roles }, '4561gfd');

    res.json({ token, roles })
}

module.exports = { getAllUser,connectUser, addUserC, getUser, deleteUser, updateUserC }