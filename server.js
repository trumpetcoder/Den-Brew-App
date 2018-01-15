//require express in our app, generate a new express app and call it 'app', Require body-parser, setting the port variable
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;

// connect to db models
// var db = require('./models');

// Dummy Data
var breweries = [
  { name : 'Wynkoop' },
  { name : 'Alpine Dog'},
  { name : 'Jagged Mountain'}
];

// Home CONTROLLER
function homeController (req, res) {
  console.log('Home Controller Hit');
  res.sendFile(__dirname + '/views/index.html'); //Setting the index.html as the rendered file when the base url is hit
}


// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(function(req, res, next) {
  console.log('MIDDLEWARE hit'); //console.log to see MIDDLEWARE is hit
  console.log('%s request to %s', req.method, req.path); //console.log to show the method and paths hit
  next();
});

// Route reconfig a GET to '/' routes to homeController
app.get('/', homeController);

// Breweries api index to hit 
app.get('/api/breweries', function (req, res) {
  res.json(breweries); 

});



// START SERVER
app.listen(port, function() {
  console.log('Server started on', port);
});

// End