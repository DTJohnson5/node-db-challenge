const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  add,
  getTasks,
  addTask
};

function get() {
  return db("project");
}

function getById(id) {
  return db("project").where({ id });
}

function add(newProject) {
  return db("project").insert(newProject);
}

function getTasks(id) {
  return db("project")
    .innerJoin("task", "task.project_id", "projects.id")
    .select(
      "project.proj_name",
      "project.proj_desc",
      "task.task_desc",
      "task.task_notes",
      // "task.completed",
      "task.project_id"
    )
    .where({ project_id: id });
}

function addTask(id, task) {
  return db("tasks")
    .where({ project_id: id })
    .insert(task);
} 