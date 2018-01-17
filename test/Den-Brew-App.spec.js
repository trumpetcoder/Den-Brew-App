// Test Directory
var Brewery = require('../models/breweries'),
	User = require('../models/user'),
	expect = require('chai').expect;

describe('Checing if Breweries model works', function ()  {
	describe("new Brewery name", function ()  {
		it("initializes a new Brewery name", function ()  {
			var brewpub = new Brewery();
			brewpub.name = "Beer Place";
			expect(brewpub.name).to.equal("Beer Place");

		});
	});
});

describe('Checing if Breweries model works', function ()  {
	describe("new Brewery description", function ()  {
		it("initializes a new Brewery description", function ()  {
			var brewpub = new Brewery();
			brewpub.description = "The greatest Place to drink";
			expect(brewpub.description).to.equal("The greatest Place to drink");

		});
	});
});

describe('Checing if Breweries model website works', function ()  {
	describe("new Brewery website", function ()  {
		it("initializes a new Brewery website", function ()  {
			var brewpub = new Brewery();
			brewpub.website = "http://brewpub.com";
			expect(brewpub.website).to.equal("http://brewpub.com");

		});
	});
});

describe('Checing if Breweries model established works', function ()  {
	describe("new Brewery established", function ()  {
		it("initializes a new Brewery established date", function ()  {
			var brewpub = new Brewery();
			brewpub.established = "2018";
			expect(brewpub.established).to.equal("2018");

		});
	});
});

describe('Checing if User email property model works', function ()  {
	describe("new User email property", function ()  {
		it("initializes a new User email", function ()  {
			var userEmail = new User();
			userEmail.email = "bob@bob.bob";
			expect(userEmail.email).to.equal("bob@bob.bob");

		});
	});
});






