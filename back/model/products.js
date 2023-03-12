const db = require('./conn.js');

function getAllProducts() {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM products", (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

function getAllProductsByCategory(id_caterory) {
    return new Promise((result, reject) => {
        db.all("SELECT p.* FROM products p LEFT JOIN product_category pc on p.id = pc.id_product WHERE pc.id_product=? GROUP BY p.id",[id_caterory], (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

function getProductById(id) {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM products WHERE id=?",[id], (err, rows) => {
            if (err) reject(err)
            else result(rows[0])
        });
    })
}

function getProductByReference(reference) {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM products WHERE reference=?",[reference], (err, rows) => {
            if (err) reject(err)
            else result(rows[0])
        });
    })
}

function getCategoryByIdProduct(id_product) {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM product_category pc WHERE id_product=?",[id_product], (err, rows) => {
            if (err) reject(err)
            else result(rows[0])
        });
    })
}

function addProduct(reference, name, price, resume, description) {
    return new Promise((result, reject) => {
        db.run("INSERT INTO products (reference, name, price, resume, description)  VALUES(?,?,?,?,?) ", [reference, name, price, resume, description], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function deleteProductById(id) {
    return new Promise((result, reject) => {
        db.get("DELETE FROM products WHERE id=?",[id], (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

module.exports = {
    getAllProducts,
    getAllProductsByCategory,
    getProductById,
    addProduct,
    deleteProductById,
    getCategoryByIdProduct,
    getProductByReference
}