// Setting up a Breweries model and Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BrewerySchema = new Schema({
  name: String,
  description: String,
  website: String,
  established: String
});

var Brewery = mongoose.model('Brewery', BrewerySchema);

module.exports = Brewery;

// var mongoose = require('mongoose'),
// // Using the built in mongoose.Schema set to Schema
//   Schema = mongoose.Schema;

// // Setting up the BrewerySchema
// var BrewerySchema = new Schema({
//      name: String,
//      owner: String,
//      open: String
// });

// var Brewery = mongoose.model('Brewery', BrewerySchema);
// module.exports = Brewery; 