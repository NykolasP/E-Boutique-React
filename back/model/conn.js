const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/boutique-e.sqlite', (error) => {
    if (error) {
        console.log(error.message)
    }
    console.log("Connected to SQLite")
});

module.exports = db;