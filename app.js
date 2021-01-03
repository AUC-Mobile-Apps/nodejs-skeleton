// Import the created router
const routes = require("./routes/index.js");

// More libraries (you need to import express in every file you use it)
const express = require("express");
const morgan = require("morgan");

const port = 3000;
const app = express();

// This sets the access control headers for this server.
// Unless you 100% know what you're doing, use these as-is.
// --
// Do note you should almost never use "Access-Control-Allow-Origin", "*"
// in actual development.
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

// This adds the logger.
app.use(morgan(':method :url :status - :response-time ms'));

// Mapping the routes from ./routes to "/"
// You could also map them to /myroutes for example:
// -- app.use("/myroutes", routes);
// -- So instead of localhost:3000/ok, it would be localhost:3000/myroutes/ok
app.use("/", routes);

// Start running the server
app.listen(port, function () {
    console.log(`Server listening on http://localhost:${port}.`);
    console.log(`You can visit http://localhost:${port}/health in your browser as a preliminary test.`);
});