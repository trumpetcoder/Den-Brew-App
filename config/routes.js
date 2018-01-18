// setting a router variable and requiring express with the Router function
var router = require('express').Router();
// requiring passport 
var passport = require('passport'); 
// Setting path for the views file rendering this helped resole the base url now we aren't hitting the signup and login functionality
var path = require('path'); //This is connected to line 17


// // // connect to db models (Database)
var db = require('../models'); 

// // Moving stuff out of server.js

// // Set a variable to router this hits base url
router.get('/', function(req,res) {
  console.log('Hit to The Home Page');
  res.sendFile(path.resolve('views/index.html')); //Added this it rendered the home page base
});

// // This route returns api information
router.get('/api', function api_index(req, res) {
//   // Documented API endpoints for Den-Brewery-App
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

// // This route returns a quick profile
router.get('/api/profile', function(req, res) {
  // Profile Setup
  res.json({
    name: 'Kevin James',
    city: 'Denver',
    github_link: 'https://github.com/trumpetcoder',
    description: 'I have an undergraduate degree in Music Ed. and 4+ years of Masters work in music history/performance. I have recently taken on fullstack web development',    
  });
});

// // This route returns an api index to get all Breweries in the db
router.get('/api/breweries', function (req, res) {
  // send all Breweries as JSON response
  db.Breweries.find(function (err, brewery) {
    res.json(brewery);
  });  
});

// // The route returns one Brewery by id
router.get('/api/breweries/:id', function (req, res) {
  db.Breweries.findOne({_id: req.params.id}, function (req, brewery) {
    res.json(brewery);
  });
});

// // This route Creates new Brewery
router.post('/api/breweries', function (req, res) {
  console.log(req.body.name);
  var newBrewery = new db.Breweries({
    name: req.body.name,
    description: req.body.description,
    website: req.body.website,
    established: req.body.established
  });
  console.log(newBrewery);
//   // save new Brewery
    db.Breweries.create(newBrewery, function (err, brewery) {
      if (err) {
        return console.log('save error: ' + err);      
      }
      console.log('save ', brewery.name);
      res.json(brewery);
  });
});

// // This route Updates a Brewery by id
router.put('/api/breweries/:id', function update(req, res) {
  var localBrew = req.params.id;
  db.Breweries.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name}}, function (err, localBrew) {
    if (err) {
      return console.log(err);
    }
    res.json(localBrew);
  });
});

// // This route Deletea a Brewery by an id
router.delete('/api/breweries/:id', function (req, res) {
//   // get Brewery id from url params (`req.params`)
  console.log('brewery delete', req.params);
  var delBrewery = req.params.id;
//   // find the index of the Brewery we want to remove
  db.Breweries.findOneAndRemove({ _id: delBrewery }, function (err, deletedBrewery) {
    res.json(deletedBrewery);
  });
});

// // A route we need to hit from the link on the splash page to get us to a simple signup form
router.get('/signup', function(req, res) { //route we want to hit
 res.render('views/signup', {message: req.flash('signupMessage')}); //the file we want to render. This points to views/signup.ejs form
});

// Our signup post strategy utilizing the local-signup strategy
router.post('/signup', function(req, res, next) {
 // res.send(req.body); a way to check the form has worked
 console.log('post route hit'); // checking to see if we have the post route 
 var signupStrategy = passport.authenticate('local-signup', { // a variable set-up to utilizing the local-signup 
   successRedirect: '/', // A route that redirects us when successful. 
   failureRedirect: '/signup', // A route that points us to the sign-up page if not successful
   failureFlash: true 
 });

 return signupStrategy(req, res, next); 
});

router.get('/login', function(req, res){
   res.render('views/login', {message: req.flash('loginMessage')}); //Added in views/login.ejs and worked
});

router.post('/login', function(req, res, next){
   console.log('attempting to');
   var loginStrategy = passport.authenticate('local-login', {
       successRedirect: '/',
       failureRedirect: '/login',
       failureFlash: true  
   });
   return loginStrategy(req, res, next);
});


module.exports = router;


// end
