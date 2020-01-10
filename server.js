var app = require('./app');
var port = process.env.PORT || 3000;


var server = app.listen(port, function() {
  console.log(`Server listening on 'http://localhost:${port}'.`);
  console.log(`You can visit http://localhost:3000/myroute/hw in your browser as a preliminary test.`);
});

//this creates your server and keeps it running
