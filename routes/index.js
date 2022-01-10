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
            return res.send(err);
        } else {
            let returnedObject = {};
            // Your code here
            return res.json(returnedObject);
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
            return res.send(err);
        } else {
            let returnedObject = {};
            // Your code here 
            // You can use res.json(result); to send all data as a response 
            return res.json(returnedObject);
        }
    });
});

// ---

// Hello World
router.get("/health", function (req, res) {
    return res.send("ok"); // For plain text, use res.send
});

// Basic Addition POST request
router.post("/add", function (req, res) {
    let body = req.body; // let is like var, but scoped
   
    let num1 = body.num1;
    let num2 = body.num2;

    let result = num1 + num2;

    return res.json({ // For JSON data, use res.json
        "result": result
    });
});

// Basic SQL GET Request
router.get("/countrycodes", function (req, res) {
    let sql = "Select * from Country;"

    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            return res.send(err);
        } else {
            let countriesWithTwoWords = 0;
            for (let i = 0; i < result.length; i++) {
                let countryName = result[i].name;
                let countryWords = countryName.split(" ");
                let countryWordCount = countryWords.length;
                if (countryWordCount == 2) {
                    countriesWithTwoWords += 1;
                }
            }
            let myResult = {
                "result": result,
                "rows": result.length,
                "countriesWithTwoWords": countries_with_two_words
            };
            return res.send(myResult);
        }
    });
});

router.post("/newcountry", function(req, res) {
    let body = req.body;
    
    let name = body.name;
    let code = body.code;
    
    let sql = `
        Insert into Country values
            (null, "${name}", "${code}")
        ;
    `;
    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            return res.send(err);
        } else {
            return res.json(result);
        }
    });   
});

// Export the created router
module.exports = router;
