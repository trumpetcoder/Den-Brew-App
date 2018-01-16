// Setting up a Breweries Schema, requiring mongoose, setting a variable Schema to the built in mongoose Schema
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Setting up a BrewerySchema with a name:,description:, website:, established: fields
var BrewerySchema = new Schema({
  name: String,
  description: String,
  website: String,
  established: String
});


// Setting a variable Brewery to the mongoose.model established in Brewery Schema
var Brewery = mongoose.model('Brewery', BrewerySchema);

// Exporting the module set to the variable Brewery
module.exports = Brewery;



// end