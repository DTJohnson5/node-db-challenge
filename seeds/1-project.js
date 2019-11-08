exports.seed = function(knex) {
  return knex('project').insert([
    {
      id: 1,
      proj_name: "Christmas Tree Lighting at Bayfront Park",
      proj_desc: "The official kick off to the holiday season in downtown Miami takes place the day after Thanksgiving as Bayfront Park unveils its 50-foot tree covered with glittering lights.",
      proj_place: "301 N. Biscayne Blvd., Miami, FL 33132",
      proj_date: "Friday, November 29, 2019 at 7:00 pm"
    },
    {
      id: 2,
      proj_name: "Christmas Tree Lighting at Shops at Merrick Park",
      proj_desc: "Shops at Merrick Park presents its 16th Annual Tree Lighting Ceremony with Santa's Arrival, sponsored by Nicklaus Children's Hospital.",
      proj_place: "358 San Lorenzo Avenue, Coral Gables FL 33146",
      proj_date: "Thursday, November 21, 2019 from 6:00 pm to 9:00 pm"
    },
    {
      id: 3,
      proj_name: "Pembroke Pines Snowfest and Christmas Tree Lighting",
      proj_desc: "Walking in a Winter Wonderland!!! 75 tons of snow, a visit with Santa, reindeer games, rides, arts and crafts, strolling holiday characters, musical performances and of course Santa's Workshop and Toy Land.",
      proj_place: "Charles F. Dodge City Center at 601 City Center Way, Pembroke Pines",
      proj_date: "TBA Saturday in early December - 4:00 to 8:00 pm"
    },
    {
      id: 4,
      proj_name: "Winter Wonderland at North Shore Open Space Park",
      proj_desc: "Don't miss the 50 tons of snow at the snow village, lots of carnival rides, games and music.",
      proj_place: "8101 Collins Avenue, Miami Beach, FL 33141",
      proj_date: "TBA from 6:00 - 9:00 pm"
    },
    {
      id: 5,
      proj_name: "Ft. Lauderdale Winterfest Boat Parade",
      proj_desc: "Sailboats, Yachts, Barges, Gondolas, Kayaks... ANYTHING that floats, all decked up with thousands of lights and a merry spirit, traversing the waters of the intracoastal, what could be more fun this holiday season?!",
      proj_place: "Intracoastal Waterway from Ft. Lauderdale to Pompano Beach.",
      proj_date: "Saturday December 14, 2019 - sails at 6:30 p.m. ends approximately 10:30 p.m."
    }
      ]);
    };
