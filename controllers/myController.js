var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../db');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Sample Post request
router.post('/mypostapi', function (req, res) {
  console.log("got post request"); 
  var sql = "your raw sql query here"
  db.mycon.query(sql, function (err, result) {
    console.log("Result: " + JSON.stringify(result));
    if(err){
      res.send(err);
    } else {
      //your code here 
    }
      });
});
router.get('/mygetapi', function (req, res) {
  console.log("got get request"); 
  let sql = "your raw sql query here"
  db.mycon.query(sql, function (err, result) {
    console.log("Result: " + JSON.stringify(result));
    if(err){
      res.send(err);
    } else {
    //your code here 
    //you can use res.json(result); to send all data as a response 
    }
  });
});

router.get('/hw', function (req, res) {
  console.log("got get request for hello world");
  res.json({
    "sample_string": "Hello world!"
  });
});

// Added in today's session
router.post('/add', function (req, res) {
  let body = req.body; // let is like var, but scoped
  let num1 = body.num1;
  let num2 = body.num2;

  let result = num1 + num2;

  return res.json({
    "result": result
  });
});

router.get('/countrycodes', function (req, res) {
  var sql = "Select * from Country;"
  db.mycon.query(sql, function (err, result) {
    console.log("Result: " + JSON.stringify(result));
    if(err){
      res.send(err);
    }else {
      for (let i = 0; i < result.length; i++) {
        result[i]["code"] = "😂"; // Replace all country codes with annoying emoji
      }
      return res.send(result);
    }
  });
});
    


module.exports = router;
