//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();

// set up PORT
var PORT = process.env.PORT || 8080;

//creating mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "fullstackdev@123",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});