const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'aaron',
    password: 'FCSG1879',
    database: 'typespeedtest'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL verbunden...');
});

app.get('/api/datenNormal', (req, res) => {
    db.query('SELECT * FROM words', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
