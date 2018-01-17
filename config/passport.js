// passport.js

// Requiring passport-local and setting it to a variable LocalStrategy
var LocalStrategy = require('passport-local').Strategy;
// Setting a variable User and requiring the models/user file
var User = require('../models/user');

// exporting the function passport
module.exports = function(passport) {

	passport.serializeUser(function(user, callback) { // serializing the information to send to the backend
		callback(null, user.id);
	});

	passport.deserializeUser(function(id, callback) { // deserializing the information for the front end
		User.findById(id, function(err, user) { 
			callback(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy ({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, callback)	{
		console.log('Trying to find User'); // Giving us feedback to see if we're checking and hit 
		User.findOne({'email': email}, function(err, user) { // Checking entered email to existing emails in db
			// There was an error
			if (err) return callback(err);

			// There is a user with this email
			if(user) {
				console.log('We Found a User');  // If the user already exists return a console.log
				return callback(null, false, req.flash('signupMessage', 'Email in Use')); // UYsing a flash message as an alert on the screen needs buildout


			} else {
			// A new User
			var newUser = new User (); // setting a variable to newUser 
			newUser.email = email; // newUser email set to predefined Schema
			newUser.password = newUser.encrypt(password);  // newUser password set to predefined Schema

			newUser.save(function(err) { // if no user found save the newUser
				if(err) return callback(err);
				return callback(null, newUser);
			});
			}
		});


	}));

	passport.use('local-login', new LocalStrategy({
       usernameField: 'email',
       passwordField: 'password',
       passReqToCallback: true
    }, function(req, email, password, callback){

       //searc for user with this email
       User.findOne({ 'email' : email}, function(err, user){
           if(err) {
               return callback(err);
           }
           //if no user is found
           if (!user) {
               return callback(null, false, req.flash('loginMessage', 'no user found.'));
           }
           //wrong password
           if(!user.validPassword(password)){
               return callback(null, false, req.flash('loginMessage', 'Wrong password.'));
           }
           
           return callback(null, user);
       });
   }));

};

// end