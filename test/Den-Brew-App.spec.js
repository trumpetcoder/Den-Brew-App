// Test Directory
var Brewery = require('../models/breweries'),
	User = require('../models/user'),
	expect = require('chai').expect;

describe('Checing if Breweries model works', function ()  {
	describe("new Brewery", function ()  {
		it("initializes a new Brewery", function ()  {
			var brewpub = new Brewery();
			brewpub.name = "Beer Place";
			expect(brewpub.name).to.equal("Beer Place");

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






