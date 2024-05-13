const express = require('express');
const mysql = require('mysql');
const app = express();
const http = require('http2');
/*

rootPassword123

*/
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "YourPassword123"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


app.listen(3000);

