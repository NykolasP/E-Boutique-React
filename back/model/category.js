const db = require('./conn.js');

function getAllCategory() {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM category", (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

function getCategoryById(id) {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM category WHERE id=?",[id], (err, rows) => {
            if (err) reject(err)
            else result(rows[0])
        });
    })
}

function addCategory(name,description,id_parent) {
    return new Promise((result, reject) => {
        db.run("INSERT INTO category (name,description,id_parent)  VALUES(?,?,?) ", [name,description,id_parent], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function addCategoryProduct(id_product,id_category) {
    return new Promise((result, reject) => {
        db.run("INSERT INTO product_category (id_product,id_category)  VALUES(?,?) ", [id_product,id_category], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function deleteCategoryById(id) {
    return new Promise((result, reject) => {
        db.get("DELETE FROM category WHERE id=?",[id], (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}

module.exports = {
    getAllCategory,
    getCategoryById,
    addCategory,
    deleteCategoryById,
    addCategoryProduct
}