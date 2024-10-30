const express = require("express");

const  router = express.Router();

const {createTask,getTasks,getSingleTask,updateSingleTask,deleteSingleTask} = require("../controllers/feedbackControllers");
router.post("/",createTask);
router.get("/",getTasks)
router.get("/:id",getSingleTask)
router.patch("/:id",updateSingleTask)
router.delete("/:id",deleteSingleTask)
module.exports = router; 