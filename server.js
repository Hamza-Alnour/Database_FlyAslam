const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors')
/*

rootPassword123

*/


app.get('/flights', (req, res) => {
    
    con.query("SELECT * FROM flight", function (err, result) {
        if (err) throw err;
        res.set('Access-Control-Allow-Origin', '*');
        res.send(result);
      });
    
});

const con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "YourPassword123"
});



con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("USE mainschemea", function (err, result) {
        if (err) throw err;
      });
});



app.use(cors({ origin: true, credentials: true }));
app.listen(3000);

