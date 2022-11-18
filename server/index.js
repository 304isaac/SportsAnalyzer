var express = require("express");
var mysql = require("mysql");
var app = express();
var database = require('./database');
var cors = require("cors");

app.use(express())
app.use(cors())

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/api/get/view/:team", function(req, res) {
    const query = "SELECT * FROM nbateams WHERE Team=? AND league=?";
    const team = (req.params.team);

    database.query(query,team, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/api/get/nbateams", function(req, res) {

    const query = "SELECT * FROM nbateams"

    database.query(query, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/east/standings", function(req, res) {

    const query = "SELECT * FROM nbateams WHERE Conf = \"E\" ORDER BY winPCT DESC;"

    database.query(query, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/west/standings", function(req, res) {

    const query = "SELECT * FROM nbateams WHERE Conf = \"W\" ORDER BY winPCT DESC;"

    database.query(query, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});


/*
app.get('/test', function(req, res) {
    let sqlStatement = "SELECT teamName FROM nbateams ORDER BY FT_PCT DESC;";
    database.query(sqlStatement, function(err, data){
        if(err) throw err;
        res.send(data);
    });
});
*/




app.listen(3001, function() {
    console.log('running on port 3001');
    database.connect(function(err) {
        if(err) throw err;
        console.log('Database connected.');
    })
});