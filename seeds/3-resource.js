exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      resource_name: "Hot Chocolate",
      resource_desc: "To help keep warm."
    },
    {
      resource_name: "Winter Coat",
      resource_desc: "To help keep warm."
    },
    {
      resource_name: "Thick waterproof boots.",
      resource_desc: "To help keep warm."
    },
    {
      resource_name: "Scarf",
      resource_desc: "To help keep warm."
    },
    {
      resource_name: "Earmuffs",
      resource_desc: "To help keep warm."
    },
    {
      resource_name: "Gloves",
      resource_desc: "To help keep warm."
    }
    ]);
  };