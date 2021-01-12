// We now import the connection object we exported in db.js.
const db = require("../controllers/db");

// More libraries…
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json()); // Automatically parse all POSTs as JSON.
router.use(bodyParser.urlencoded({ extended: true })); // Automatically parse URL parameters

// Skeleton for POST request
router.post("/mypostapi", function (req, res) {
    let sql = `
        Your SQL Query Here
    `;
    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            res.send(err);
        } else {
            let returnedObject = {};
            // Your code here
            return res.result(returnedObject);
        }
    });
});

// Skeleton for GET Request
router.get("/mygetapi", function (req, res) {
    let sql = `
        Your SQL Query Here
    `;
    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            res.send(err);
        } else {
            let returnedObject = {};
            // Your code here 
            // You can use res.json(result); to send all data as a response 
            return res.result(returnedObject);
        }
    });
});

// ---

// Hello World
router.get("/health", function (req, res) {
    return res.send("ok");
});

// Basic Addition POST request
router.post("/add", function (req, res) {
    let body = req.body; // let is like var, but scoped
   
    let num1 = body.num1;
    let num2 = body.num2;

    let result = num1 + num2;

    return res.json({
        "result": result
    });
});

// Basic SQL GET Request
router.get("/countrycodes", function (req, res) {
    let sql = "Select * from Country;"

    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            res.send(err);
        } else {
            let myResult = {
                "result": result,
                "rows": result.length
            };
            return res.send(myResult);
        }
    });
});

// Export the created router
module.exports = router;
