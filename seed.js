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
	name: 'Miles Davis',
	description: 'Alton, IL.',
	website: 'Four',
	established: 'no'
	},
	{
	name: 'Freddie Hubbard',
	description: 'Indianapolis, IN.',
	website: 'Povo',
	established: 'no'			
	},
	{
	name: 'Lee Morgan',
	description: 'Philadelphia, PA.',
	website: 'The Sidewinder',
	established: 'no'	
	}
];

// {description: 'Local Breweries within a mile still open'};
db.Breweries.remove({}, function(err, trumpet){

	db.Breweries.create(local_Breweries, function(err, brewery) {

	  if (err){
		return console.log('Error:', err);
	  }
	    console.log(brewery);
	    console.log('Created new brewery', brewery._id);
	    process.exit();
    });
});