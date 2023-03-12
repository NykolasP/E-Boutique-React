const db = require('./conn.js');

function getAllRoles() {
    return new Promise((result, reject) => {
        db.all("SELECT * FROM roles", (err, rows) => {
            if (err) reject(err)
            else result(rows)
        });
    })
}


module.exports = {
    getAllRoles
}