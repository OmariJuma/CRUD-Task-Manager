const getAllTasks = async (req, res) => {
  res.send("all items");
};

const createTask = async (req, res) => {
  res.send("create task");
};

const updateTask = async (req, res) => {
  res.send("update task");
};

const deleteTask = async (req, res) => {
  res.send("delete task");
};
const getOneTask = async (req, res) => {
  res.send("get one task");
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
};
