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

