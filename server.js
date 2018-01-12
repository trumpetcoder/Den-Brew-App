// Requiring express in the application
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	// Plan is to hit API here returning results with res.send






  res.send("You're Home!");
});

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});

// Adding changes to see recommit