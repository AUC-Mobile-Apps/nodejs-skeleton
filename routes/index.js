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
                let country = result[i];
                let name = country.name;
                let words = name.split(" ");
                let wordCount = words.length;
                if (wordCount == 2) {
                    countriesWithTwoWords++;
                }
            }
            let myResult = {
                "result": result,
                "rows": result.length,
                "countriesWithTwoWords": countriesWithTwoWords
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
