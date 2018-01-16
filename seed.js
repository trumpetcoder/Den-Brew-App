// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models/');

var local_Breweries = [
	{
	name: "Tivoli Brewing",
 	description: "The Tivoli Beer story traces its roots to 1864, when German immigrant Moritz Sigi founded a brewery in the newly settled town of Denver. Taken over in 1900 by John Good and renamed Tivoli, this brewery would become one of the largest breweries in the West, selling its light golden lager nearly everywhere west of the Mississippi until closing its doors in 1969. In 2012, a group of Colorado Natives formed the Tivoli Distributing Company to bring this Colorado legend back to life.",
 	website: "http://tivolibrewingco.com/",
 	established: "1864"
	},
	{
	name: "Jagged Mountain Brewery",
	description: "Jagged Mountain Craft Brewery is a unique, innovative, and distinctive brewery based out of Denver, Colorado.",
	website: "http://www.jaggedmountainbrewery.com/",
	established: "2013"
	},
	{
	name: "Woods Boss Brewing Company",
	description: "Woods Boss Brewing has transformed an early 1900's brick building in Five Points into a place for community, good music, sharing adventures and brews. The Woods Boss is at home where the mountains embrace the rivers. Kick it with a much deserved brew and gear up to get back on the trail.",
	website: "https://www.woodsbossbrewing.com/",
	established: "2014"			
	},
	{
	name: "Intrepid Sojourner Beer Project",
	description: "A brewery focusing on international twists on traditional styles, they brew everything from historical styles, to adjunct brews, to the classics. Whether its a Basil IPA, a Turkish Coffee Stout, a Gratzer, or an ESB, with 20 taps you're sure to find something for your palate.",
	website: "http://www.sojournerbeers.com",
	established: "2017"	
	},
	{
	name: "Alpine Dog Brewing Company",
	description: "Alpine Dog is a term coined for Coloradans. While we do love our dogs, this term goes deeper than that. It is a reflection of the people. In Colorado we love the mountains. It's where we go to play; it's where we go to exercise, relax, make friends and have fun getting away.",
	website: "http://alpinedogbrewery.com/",
	established: "2011"	
	},
	{
	name: "Renegade Brewing Company",
	description: "Offensively Delicious? Yes, that’s what our beer is. Always creative and always packed with flavor. This is beer for those who do the don’ts and don’t the dos, the Renegades. We don’t care about traditional styles, or following the trends, we care about making f’ing delicious beer that we are proud to serve. Renegade was founded by Brian and Khara O’Connell in the summer of 2011 in the Santa Fe Arts District of Denver. Brian brought his offensively delicious brews, developed in his backyard, to Denverites to encourage social interaction and friendship.  Come down to our taproom, or ask for us at your favorite bar, restaurant or liquor store. Whatever you do, don’t be something you’re not.Be Renegade.",	
	website: "http://www.renegadebrewing.com/",
	established: "2011"
	},
	{
	name: "Lowdown Brewery + Kitchen",
	description: "LowDown is the culmination of 20+ years of professional brewing experience. LowDown owners Scott and Phil have won numerous awards, including accolades from The Great American Beer Festival.  We don’t just stop at great beer, we serve great food too.  We only serve the best seasonal menu items with quality ingredients. LowDown understands what it means to give back. We know that we reside in a neighborhood many people call home. Making our neigborhood and everything around it better is part of our mission. From our casual environment to educating our staff, we're redefining the brewery experience. At LowDown we're passionate about quality beer, great and sustainable food, and making memories with good friends.",
	website: "http://www.lowdownbrewery.com/",
	established: "2014"
	},
	{
	name: "Rock Bottom Restaurant & Brewery",
	description: "Our brewers eat, drink and sleep beer. They’re equal parts scientist, artist and beer geek. So, while every Rock Bottom brewer is passionate about their craft, they also put their own signature into every beer. In other words, there is a unique beer menu at every Rock Bottom in addition to our core line up of consistent flavor profiles that you can expect at any Rock Bottom you visit nationwide. But, you’re thirsty and want to know what beers you can expect down here, right?",
	website: "http://www.rockbottom.com/",
	established: "1998"
	},
	{
	name: "CO-Brew",
	description: "CO Brew is Denver's only homebrew supply store, small-scale brewery, and brew on premises experience. Denver metro homebrewers looking for a full selection of grains, hops, yeast and equipment will appreciate our convenient location at 11th & Broadway in Central Denver. Brew on premises is a unique opportunity to learn to brew or to improve your brewing skills using professional-grade equipment. If you live in a small space and do not have room to brew or store brewing equipment, want to learn how to brew, or simply enjoy having fun and want to brew with friends, brew on premises is perfect for you. In addition, we will handle all of the set-up and messy clean-up.",
	website: "http://cobrewdenver.com",
	established: "2015"
	},
	{
	name: "Pint's Pub Brewery and Freehouse",
	description: "Cheers and welcome to Pints Pub, a traditional brew pub that aspires to be your local regardless of your locale. Here at Pints, you'll find the charm and personality of the 'local', the third place, neither home nor work.",
	website: "http://www.pintspub.com/",
	established: "1993"
	},
	{
	name: "Good River Beer Company",
	description: "Good River Beer is a craft brewer based in Denver, CO.  Our mission is to share our inspirational beers and protect and conserve rivers.  Good River Beer will provide a variety of cutting edge, niche beers nationwide and through our efforts give back a percentage of our profits to river conservation efforts.",
	website: "http://www.goodriverbeer.com",
	established: "2015"
	}
];

// {description: 'Local Breweries within a mile still open'};
db.Breweries.remove({}, function(err, trumpet){ //Removes Old Seeded data

	db.Breweries.create(local_Breweries, function(err, brewery) { //Adding in new Breweries from above seeded data

	  if (err){
		return console.log('Error:', err);
	  }
	    console.log(brewery);
	    console.log('Created new brewery', brewery._id);
	    process.exit();
    });
});