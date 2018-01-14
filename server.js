// Requiring express in the application
// var express = require('express'),
// 	bodyParser = require('body-parser'),
//     app = express(),
//     mongoose = require('mongoose');

// // mongoose.connect('mongodb://localhost/den-brewery-api');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());



// // connect to db models
// var db = require('./models');

// var port = process.env.PORT || 3000;

// app.get('/', function(req, res) {
// 	// Plan is to hit API here returning results with res.send


//   res.send("You're Home!");
// });



// // start server
// app.listen(port, function() {
//   console.log('Server started on', port); 
// });

// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');

// connect to db models
var db = require('./models');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
// app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));


////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
// app.get('/', function (req, res) {
  // res.sendFile('views/index.html' , { root : __dirname});
// });

// get all books
// app.get('/api/books', function (req, res) {
  // send all books as JSON response
//   db.Book.find().populate('author')
//     .exec(function(err, books) {
//       if (err) { return console.log("index error: " + err); }
//       res.json(books);
//   });
// });

// get one book
// app.get('/api/books/:id', function (req, res) {
//   db.Book.findOne({_id: req.params.id }, function(err, data) {
//     res.json(data);
//   });
// });

// create new book
// app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  // var newBook = new db.Book({
  //   title: req.body.title,
  //   image: req.body.image,
  //   releaseDate: req.body.releaseDate,
  // });
  // find the author from req.body
  // db.Author.findOne({name: req.body.author}, function(err, author){
  //   if (err) {
  //     return console.log(err);
  //   }
    // add this author to the book
    // newBook.author = author;


    // save newBook to database
    // newBook.save(function(err, book){
    //   if (err) {
    //     return console.log("save error: " + err);
    //   }
    //   console.log("saved ", book.title);
      // send back the book!
//       res.json(book);
//     });
//   });
// });

// delete book
// app.delete('/api/books/:id', function (req, res) {
//   // get book id from url params (`req.params`)
//   console.log('books delete', req.params);
//   var bookId = req.params.id;
//   // find the index of the book we want to remove
//   db.Book.findOneAndRemove({ _id: bookId }, function (err, deletedBook) {
//     res.json(deletedBook);
//   });
// });

// Adding a character to a specific book
// app.post('/api/books/:book_id/characters', function(req, res) {
  // Get book according to url params (req.params)
//   var bookId = req.params.book_id;
//   db.Book.findById(bookId)
//     .populate('Author')
//     .exec(function (err, foundBook) {
//     if (err) {
//       return console.log('No book found');
//     }
    
//   });
// });




// app.listen(process.env.PORT || 3000, function () {
//   console.log('Example app listening at http://localhost:3000/');
// });

