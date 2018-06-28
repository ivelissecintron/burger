var express = require("express");

var router = express.Router();

//import the burger.js model to use its database functions
var burger = require("../models/burger.js");

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

router.delete('/burgers/:id', function (request, response) {
    var condition = 'id = ' + request.params.id;
    burger.deleteOne(condition, function (result) {
        res.redirect('/');
    });
});
  
// export routes for server.js to use.
module.exports = router;