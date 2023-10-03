const TaskModel = require("../models/models");
const asyncWrapper = require("../middlewares/asyncWrapper");
const getAllTasks = async (req, res) => {
  const Products = await TaskModel.find({});
  res.json(Products);
};

const createTask = asyncWrapper(async (req, res) => {
  const { name, completed } = req.body;
  const product = await TaskModel.create({ name, completed });
  res.json(product);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { _id } = req.params;
  const { name, completed } = req.body;
  const update = await TaskModel.findByIdAndUpdate(
    { _id },
    { name, completed },
    {
      runValidators: true,
      new: true,
    }
  );
  if (!update) {
    return res.status(404).json({ msg: `No task with id ${_id}` });
  }
  res.json(update);
});

const deleteTask = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteItem = await TaskModel.findOneAndDelete({ _id });
    if (!deleteItem) {
      return res.status(404).json({ msg: `No task with id ${_id}` });
    }
    res.json({ msg: "Item has been deleted" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
const getOneTask = async (req, res) => {
  try {
    const { _id } = req.params;
    const oneTask = await TaskModel.findById({ _id });
    if (!oneTask) {
      return res.status(404).json({ msg: `No task with id ${_id}` });
    }
    res.json(oneTask);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
};
