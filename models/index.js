// Requiring mongoose and setting up the db to brewery-api
var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/brewery-api");

// Requiring the breweries.js file
module.exports.Breweries = require("./breweries.js");




// end