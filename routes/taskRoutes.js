const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
} = require("../controllers/taskControllers");
const router = require("express").Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;
