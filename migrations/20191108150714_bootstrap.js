
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments();

        tbl.string('proj_name').notNullable();
        tbl.string('proj_desc');
        tbl.string('proj_place');
        tbl.string('proj_date');
        tbl
        .boolean('finished')
        .notNullable()
        .defaultTo(0);
    })

    .createTable('task', tbl => {
        tbl.increments();

        tbl.string('task_desc').notNullable();
        tbl.string('task_notes');
        tbl
        .boolean('finished')
        .notNullable()
        .defaultTo(0);

        tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

    .createTable("resources", tbl => {
        tbl.increments();

        tbl
          .string("resource_name")
          .notNullable()
          .unique();
        tbl.string("resource_desc");
      })

      .createTable("proj_resource", tbl => {
        tbl.increments();

        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("project")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resource")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('proj_resource')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project');
};
