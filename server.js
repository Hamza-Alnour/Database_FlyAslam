const express = require('express');
const mysql = require('mysql');
const app = express();

/*

rootPassword123

*/


app.get('/flights', (req, res) =>{
    
    con.query("SELECT * FROM flight", function (err, result) {
        if (err) throw err;
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
});




app.listen(3000);

