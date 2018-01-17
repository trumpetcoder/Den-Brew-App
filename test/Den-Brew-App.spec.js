// Test Directory
var Brewery = require('../models/breweries'), //Requiring models/breweries for testing Breweries model
	User = require('../models/user'), //Requiring models/user for testing User model
	expect = require('chai').expect; //look for Chai

// Checking the Breweries model name
describe('Checing if Breweries model works', function ()  {
	describe("new Brewery name", function ()  {
		it("initializes a new Brewery name", function ()  {
			var brewpub = new Brewery();
			brewpub.name = "Beer Place";
			expect(brewpub.name).to.equal("Beer Place");

		});
	});
});

// Checking the Breweries model description
describe('Checing if Breweries model works', function ()  {
	describe("new Brewery description", function ()  {
		it("initializes a new Brewery description", function ()  {
			var brewpub = new Brewery();
			brewpub.description = "The greatest Place to drink";
			expect(brewpub.description).to.equal("The greatest Place to drink");

		});
	});
});

// Checking the Breweries model website
describe('Checing if Breweries model website works', function ()  {
	describe("new Brewery website", function ()  {
		it("initializes a new Brewery website", function ()  {
			var brewpub = new Brewery();
			brewpub.website = "http://brewpub.com";
			expect(brewpub.website).to.equal("http://brewpub.com");

		});
	});
});

// Checking the Breweries model establish date
describe('Checing if Breweries model established works', function ()  {
	describe("new Brewery established", function ()  {
		it("initializes a new Brewery established date", function ()  {
			var brewpub = new Brewery();
			brewpub.established = "2018";
			expect(brewpub.established).to.equal("2018");

		});
	});
});

// Checking the User model email
describe('Checing if User email property model works', function ()  {
	describe("new User email property", function ()  {
		it("initializes a new User email", function ()  {
			var userEmail = new User();
			userEmail.email = "bob@bob.bob";
			expect(userEmail.email).to.equal("bob@bob.bob");

		});
	});
});






