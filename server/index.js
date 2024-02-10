const mysql = require('mysql');
const express = require('express');
const app = express();

const PORT = "8080";

const db = mysql.createPool({
    host: 'hackathon-database.czaya4ms4f7p.us-east-1.rds.amazonaws.com',
    user: 'masteradmin',
    password: 'uE5!&4ttQ',
    database: 'hackathondatabase',
});

app.get("/", (req, res) => {
    const sql_insert = "SELECT * FROM hackathondatabase.testimonials;";
    db.query(sql_insert, (err, result) => {
        res.send(sql_insert);
    });
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});