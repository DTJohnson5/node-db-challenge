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
  return db('project')
  .innerJoin('task', 'task.project_id', 'project.id')
  .select(
    "project.proj_name",
    "project.proj_desc",
    "project.finished",
    "task.task_desc",
    "task.task_notes",
    "task.finished"
  )
  .where({project_id: id});
}

function addTask(id, task) {
  return db("task")
    .where({ project_id: id })
    .insert(task);
}