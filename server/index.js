const mysql = require('mysql');
const cors = require('cors');

const express = require('express');
const app = express();

const PORT = "8080";

const db = mysql.createPool({
    host: 'hackathon-database.czaya4ms4f7p.us-east-1.rds.amazonaws.com',
    user: 'masteradmin',
    password: 'uE5!&4ttQ',
    database: 'hackathondatabase',
});

app.use(cors());
app.use(express.json());

app.post('/testimonials/insert', (req, res) => {
    const name = req.body.name;
    const message = req.body.message;

    const testimonialInsert = "INSERT INTO hackathondatabase.testimonials (name, message) VALUES (?, ?);";
    db.query(testimonialInsert, [name, message], (err, result) => {

    });
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});