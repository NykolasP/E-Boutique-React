const db = require('./conn.js');

function getAllUsers() {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM users", (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

function getUserByEmail(email) {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM users WHERE email=?",[email], (err, rows) => {
            if (err) reject(err)
            else result(rows[0])
        });
    })
}

function getUserRoleByEmail(email) {
    return new Promise((result, reject) => {
        db.all("SELECT ur.id_role FROM users u LEFT JOIN user_roles ur on u.id = ur.id_user WHERE u.email=?",[email], (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

function addRoleToUser(id_user, id_role) {
    return new Promise((result, reject) => {
        db.run("INSERT INTO user_roles (id_user, id_role)  VALUES(?,?) ", [id_user, id_role], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function deleteUserByEmail(email) {
    return new Promise((result, reject) => {
        db.get("DELETE FROM users WHERE email=?",[email], (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

function addUser(surname,name,email,password) {
    return new Promise((result, reject) => {
        db.run("INSERT INTO users (surname,name,email,password) VALUES(?,?,?,?) ", [surname,name,email,password], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

module.exports = {
    getAllUsers,
    getUserByEmail,
    deleteUserByEmail,
    addUser,
    addRoleToUser,
    getUserRoleByEmail
}