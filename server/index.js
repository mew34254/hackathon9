const mysql = require('mysql');
const express = require('express');
const app = express();

const PORT = "8080";

const db = mysql.createPool({
    host: 'localhost',
    user: 'teammember',
    password: 'password',
    database: 'hackathondatabase',
});

app.get("/", (req, res) => {
    const sql_insert = ""
    db.query(sql_insert, (err, result) => {
        res.send('hello');
    });
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});