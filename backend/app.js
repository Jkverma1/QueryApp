// modules
const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");

//express app
const app = express();

// handle cors + middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTION,POST,PUT,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "auth-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//database Stuff
/*
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});*/

app.use(bodyParser.json());

//routes
app.get("/", (res, req) => {
  res.send("Homepage");
});

const TodosRoute = require('./routes/index');
  app.use('/result', ResultQueryRoute)

// listening ports
app.listen(3000 | process.env.port, () => {
  console.log("Server Started!");
});
