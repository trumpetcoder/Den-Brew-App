// setting a router variable and requiring express with the Router function
// var router = require('express').Router();
// // requiring passport 
// var passport = require('passport'); 

// // A route we need to hit from the link on the splash page to get us to a simple signup form
// router.get('/signup', function(req, res) { //route we want to hit
// 	res.render('signup'); //the file we want to render. This points to signup.ejs form
// });

// // Our signup post strategy utilizing the local-signup strategy
// router.post('/signup', function(req, res, next) {
// 	// res.send(req.body); a way to check the form has worked
// 	console.log('post route hit'); // checking to see if we have the post route 
// 	var signupStrategy = passport.authenticate('local-signup', { // a variable set-up to utilizing the local-signup 
// 		successRedirect: '/', // A route that redirects us when successful. Needs built out
// 		failureRedirect: '/signup', // A route that points us to the sign-up page if not successful
// 		failureFlash: true 
// 	});

// 	return signupStrategy(req, res, next); 
// });

// end