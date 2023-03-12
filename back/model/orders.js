const db = require('./conn.js');

function getAllOrders() {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM orders", (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

function getOrderByReference(email) {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM orders WHERE reference=?",[email], (err, rows) => {
            if (err) reject(err)
            else result(rows[0])
        });
    })
}

function getOrderDetailByReference(email) {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM order_detail WHERE reference=?",[email], (err, rows) => {
            if (err) reject(err)
            else result(rows[0])
        });
    })
}

function addOrder(reference,price_total,id_client,status) {
    return new Promise((result, reject) => {
        db.run("INSERT INTO users (reference,price_total,id_client,status) VALUES(?,?,?,?) ", [reference,price_total,id_client,status], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function addOrderDetail(reference,id_product,price,nb_product) {
    return new Promise((result, reject) => {
        db.run("INSERT INTO users (reference,id_product,price,nb_product) VALUES(?,?,?,?) ", [reference,id_product,price,nb_product], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}



module.exports = {
    getAllOrders,
    getOrderByReference,
    getOrderDetailByReference,
    addOrder,
    addOrderDetail
}