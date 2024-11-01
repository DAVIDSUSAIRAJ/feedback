const express = require("express");

const  router = express.Router();

const {createTask,getTasks,getSingleTask,updateSingleTask,deleteSingleTask,createTasks,updateTasks,deleteTasks} = require("../controllers/feedbackControllers");
router.post("/",createTask);
router.get("/",getTasks)
// router.get("/:id",getSingleTask)
// router.patch("/:id",updateSingleTask)
// router.delete("/:id",deleteSingleTask)

router.post("/bulk", createTasks);       // For bulk creation
router.patch("/bulk", updateTasks);      // For bulk update
router.delete("/bulk", deleteTasks);     // For bulk deletion

module.exports = router; 