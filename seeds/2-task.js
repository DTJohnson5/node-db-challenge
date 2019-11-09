exports.seed = function(knex, Promise) {
  return knex('task').insert([
      {
        task_desc: "Get warm clothes.",
        task_notes: "Sell at Burlington.",
        project_id: 1
      },
      {
        task_desc: "Get warm clothes.",
        task_notes: "Sell at Burlington.",
        project_id: 2
      },
      {
        task_desc: "Get warm clothes.",
        task_notes: "Sell at Burlington.",
        project_id: 3
      },
      {
        task_desc: "Get warm clothes.",
        task_notes: "Sell at Burlington.",
        project_id: 4
      },
      {
        task_desc: "Get warm clothes.",
        task_notes: "Sell at Burlington.",
        project_id: 5
      }
    ]);
  };
