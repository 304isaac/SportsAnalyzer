var express = require("express");
var mysql = require("mysql");
var app = express();
var database = require('./database');
var cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(express())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "username",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 60,
    },
}));


app.get("/", function(req, res) {
    res.send("Hello World");
});


//--------------------------------------

app.post("/register", (req, res) => {

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const query = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)"

    database.query(query, [email, username, password], (err, result) => {
        console.log(err);
    });
});


app.get("/login", (req, res) => {
    if(req.session.user) {
        res.send({loggedIn:true, user:req.session.user});
    }else{
        res.send({loggedIn:false});
    }
})

app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const query = "SELECT * FROM users WHERE username = ? AND password = ?"

    database.query(query, [username, password],
    function (err, data) {

        if(err) {
            res.send({err: err})
        }
        if(data.length > 0) {
            req.session.user = data;
            res.send(data);
            console.log(req.session.user);
        } else {
            res.send({message: "Invalid username or password."});
        }
    });
});


app.post("/pick", (req, res) => {
    const pick = req.body.pick;
    const matchNum = req.body.matchNum;

    const query = "UPDATE matchups SET Pick=? WHERE matchNum=?;";

    database.query(query,[pick, matchNum], (err, result) => {
        if(err) throw err;
    });
});


app.get("/api/get/teams", function(req, res) {

    const query = "SELECT * FROM teams"

    database.query(query, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/api/get/matchups", function(req, res) {

    const query = "SELECT *, DATE_FORMAT(date,'%m/%d/%y %h:%i %p') as fdate FROM matchups WHERE Score=''"
    +" ORDER BY date ASC"
    +" LIMIT 50;";

    database.query(query, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/nbateams", function(req, res) {

    const query = "SELECT * FROM nbateamstats"

    database.query(query, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/api/get/view/:team", function(req, res) {
    const query = "SELECT * FROM teams WHERE teamName = ? AND League = 'NBA';"
    const team = req.params.team;

    database.query(query,team, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/view/:team/data", function(req, res) {
    const query = "SELECT * FROM nbateamstats WHERE Team = ?";
    const team = (req.params.team);

    database.query(query,team, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/east/standings", function(req, res) {

    const query = "SELECT * FROM teams WHERE Conf = \"E\" ORDER BY winPCT DESC;"

    database.query(query, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/west/standings", function(req, res) {

    const query = "SELECT * FROM teams WHERE Conf = \"W\" ORDER BY winPCT DESC;"

    database.query(query, function(err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/view/:team/players", function(req, res) {

    const query = "SELECT * FROM nbaplayers WHERE Tm LIKE ? ORDER BY MP DESC";
    const team = ("%" + req.params.team + "%");

    database.query(query,[team, team], function (err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/view/:team/players/:position", function(req, res) {

    const query = "SELECT * FROM nbaplayers WHERE Tm = ? AND Pos LIKE ? ORDER BY GS DESC;";
    const team = req.params.team;
    const position = ("%" + req.params.position + "%");

    database.query(query,[team,position], function (err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/injuries/:team", function(req, res) {

    const team = "%"+ (req.params.team).replaceAll("%20", " ") + "%";
    const query = "SELECT * FROM injuries WHERE Team LIKE ? ORDER BY 'Update?' DESC";

    database.query(query,team, function (err, data) {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/api/get/injuries", function(req, res) {

    const query = "SELECT * FROM injuries ORDER BY 'Update?' DESC;";

    database.query(query, function (err, data) {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/api/get/view/:team/starters", function(req, res) {

    const query = "SELECT * FROM nbastarters WHERE Team LIKE ?";
    const team = "%" + req.params.team + "%";

    database.query(query,team, function (err, data) {
        if(err) throw err;
        res.send(data);
    });
});


app.get("/api/get/view/:player/stats", function(req, res) {

    const query = "SELECT * FROM nbaplayers WHERE Player LIKE ?";
    var player = (req.params.player); 

    console.log(player);

    if(player.includes(".")){
        player = player.replace(". ", "% ");
    }else{
        player = "%" + player.replace(" ", " ");
    }

    database.query(query,player, function (err, data) {
        if(err) throw err;
        res.send(data);
    });
});

app.listen(3001, function() {
    console.log('running on port 3001');
    database.connect(function(err) {
        if(err) throw err;
        console.log('Database connected.');
    });
});