// build out getting ready to add passport
// Requiring mongoose + bcrypt. Setting up built in Schema variable
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// UserSchema to be used for signup/login takes email and password
var UserSchema = new Schema ({
	email: String,
	password: String
});

//  Setting up the User.Schema with encrypt/ generating a hash with a salt of 8 characters
UserSchema.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// Setting a variable User to the mongoose.model UserSchema
var User = mongoose.model('User', UserSchema);

// Exporting the variable User set to the above Schema
module.exports = User;


// end