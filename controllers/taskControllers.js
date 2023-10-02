const TaskModel = require("../models/models");
const getAllTasks = async (req, res) => {
  const Products = await TaskModel.find({});
  res.json(Products);
};

const createTask = async (req, res) => {
  const { name, completed } = req.body;
  const product = await TaskModel.create({ name, completed });
  res.json(product);
};

const updateTask = async (req, res) => {
  const { _id } = req.body;
  const update = await TaskModel.updateOne({ _id });
  res.json(update);
};

const deleteTask = async (req, res) => {
  const { _id } = req.body;
  await TaskModel.deleteOne({ _id });
  res.json({ msg: "Item has been deleted" });
};
const getOneTask = async (req, res) => {
  const { _id } = req.body;
  const oneTask = await TaskModel.findById({ _id });
  res.json(oneTask);
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
};
