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
    const sql_insert = "INSERT INTO testimonials (name, message) VALUES ('Janelle Monae', 'So excited to announce my partnership with Financial Fighters!');";
    db.query(sql_insert, (err, result) => {
        res.send('hello');
    });
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});