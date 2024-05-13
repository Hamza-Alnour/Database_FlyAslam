const express = require('express');
const mysql = require('mysql');
const app = express();

/*

rootPassword123

*/

const jsonObj = {
    id: 2,
    time: "12:10AM"
}

app.get('/', (req, res) =>{
    res.send(jsonObj);
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

