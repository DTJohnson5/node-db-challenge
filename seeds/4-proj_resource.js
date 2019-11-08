exports.seed = function(knex, Promise) {
  return knex('proj_resource').insert([
    {id: 1, project_id: 1, resource_id: 2},
    {id: 2, project_id: 1, resource_id: 3},
    {id: 3, project_id: 1, resource_id: 4},
    {id: 4, project_id: 1, resource_id: 5},
    {id: 5, project_id: 1, resource_id: 6},
    {id: 6, project_id: 2, resource_id: 2},
    {id: 7, project_id: 2, resource_id: 3},
    {id: 8, project_id: 2, resource_id: 4},
    {id: 9, project_id: 2, resource_id: 5},
    {id: 10, project_id: 2, resource_id: 6},
    {id: 11, project_id: 3, resource_id: 2},
    {id: 12, project_id: 3, resource_id: 3},
    {id: 13, project_id: 3, resource_id: 4},
    {id: 14, project_id: 3, resource_id: 5},
    {id: 15, project_id: 3, resource_id: 6},
    {id: 16, project_id: 4, resource_id: 2},
    {id: 17, project_id: 4, resource_id: 3},
    {id: 18, project_id: 4, resource_id: 4},
    {id: 19, project_id: 4, resource_id: 5},
    {id: 20, project_id: 4, resource_id: 6},
    {id: 21, project_id: 5, resource_id: 1},
    {id: 22, project_id: 5, resource_id: 2},
    {id: 23, project_id: 5, resource_id: 3},
    {id: 24, project_id: 5, resource_id: 4},
    {id: 25, project_id: 5, resource_id: 5},
    {id: 26, project_id: 5, resource_id: 6}
      ]);
    };