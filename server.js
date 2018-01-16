//require express in our app, generate a new express app and call it 'app', Require body-parser, setting the port variable
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;

// connect to db models
var db = require('./models'); //added

// Dummy Data
// var breweries = [
//   { name : 'Wynkoop' },
//   { name : 'Alpine Dog'},
//   { name : 'Jagged Mountain'}
// ];

// Home CONTROLLER
function homeController (req, res) {
  console.log('Home Controller Hit');
  res.sendFile(__dirname + '/views/index.html'); //Setting the index.html as the rendered file when the base url is hit
}

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //added

// Middleware
app.use(function(req, res, next) {
  console.log('MIDDLEWARE hit'); //console.log to see MIDDLEWARE is hit
  console.log('%s request to %s', req.method, req.path); //console.log to show the method and paths hit
  next();
});

// Route reconfig a GET to '/' routes to homeController hits the /views/index.html
app.get('/', homeController);

app.get('/api', function api_index(req, res) {
  // Documented API endpoints for Den-Brewery-App
  res.json({
    message: "Welcome to my Brewery api! Here's what you need to know!",
    documentation_url: "https://github.com/trumpetcoder/Den-Brew-App/blob/master/README.md", 
    base_url: "https://ancient-fjord-20095.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "A little bit of info about me and my journey"}, 
      {method: "GET", path: "/api/breweries", description: "Return a collection of all Breweries in db"}, 
      {method: "GET", path: "/api/breweries/:id", description: "Grab one Brewery by an id"}, 
      {method: "DELETE", path: "/api/breweries/:id", description: "Delete one Brewery by id."}, 
      {method: "POST", path: "/api/breweries", description: "Adding a new Brewery to db."}, 
      {method: "PUT", path: "/api/breweries/:id", description: "Updating a particular value based off an id"}
    ]
  });
});

app.get('/api/profile', function(req, res) {
  // Profile Setup
  res.json({
    name: 'Kevin James',
    city: 'Denver',
    github_link: 'https://github.com/trumpetcoder',
    description: 'I have an undergraduate degree in Music Ed. and 4+ years of Masters work in music history/performance. I have recently taken on fullstack web development',
    
  });
});

// Breweries api index to hit 
app.get('/api/breweries', function (req, res) { //utilizing hardcoded data
  res.json(breweries); 

});



// START SERVER
app.listen(port, function() {
  console.log('Server started on', port);
});










// End