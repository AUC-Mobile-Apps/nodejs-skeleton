var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });
// the above function just allows for requests and responses to be 
// passed to and from backend and frontend

//importing the controller
let mycontroller =
  require('./controllers/myController');

//creating the route for the controller
app.use('/mycontroller', mycontroller);

var port = process.env.PORT || 3000;

// Start running the server
app.listen(port, function() {
  console.log(`Server listening on 'http://localhost:${port}'.`);
  console.log(`You can visit http://localhost:${port}/myroute/hw in your browser as a preliminary test.`);
});


module.exports = app;
