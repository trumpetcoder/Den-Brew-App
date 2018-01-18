//require express in our app, generate a new express app and call it 'app', Require body-parser, setting the port variable
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

// Requiring passport, session, and flash (Added as part of Passport buildout!)
var passport = require('passport'),
  session = require('express-session'),
  flash = require('connect-flash');

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //added

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

// Firing up our Engine (Added as part of Passport buildout!)
app.set('views', __dirname); //Added to make views the base directory
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// (Adding in the app.use as part of Passport buildout!)
app.use(session({ secret: 'thing' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Requiring the passport file found in config (Added as part of Passport buildout)
require('./config/passport')(passport); //Seems to be Working

// Setting a variable router to be used in passport (Added as part of Passport)
var router = require('./config/routes');

// Middleware
app.use(function(req, res, next) {
  console.log('MIDDLEWARE hit'); //console.log to see MIDDLEWARE is hit
  console.log('%s request to %s', req.method, req.path); //console.log to show the method and paths hit
  next();
});

// Requiring router
var routes = require('./config/routes.js');
app.use(routes);

// START SERVER
// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});


// End