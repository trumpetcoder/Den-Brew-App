var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/den-brewery-api');

module.exports.Breweries = require("./breweries.js");