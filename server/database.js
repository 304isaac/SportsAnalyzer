var mysql = require("mysql");

var database = mysql.createConnection({
    host:'localhost',
    database:'sportsdata',
    user: 'root',
    password: 'root'
});

module.exports = database;