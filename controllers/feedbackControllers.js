const mongoose = require("mongoose")
const feedbackModel = require("../models/feedbackModels");


//create a task, to post
const createTask = async (req,res)=>{
    try {
        const {title,description} = req.body;
        const task = await feedbackModel.create({ title, description });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({message:error.message});
        console.log(error,"error")
    }


}

const getTasks = async (req, res)=>{
    try {
        const tasks = await feedbackModel.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
    
}

const getSingleTask = async (req, res)=>{
    try {
      const {id} = req.params;
      console.log(id,"diiii")
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Invalid id"});
      }
      const singleTask = await feedbackModel.findById(id);
      res.status(200).json(singleTask)
    } catch (error) {
        res.status(400).json({message:error.message});
    }
    
}

const updateSingleTask = async (req, res)=>{
    try {
      const {id} = req.params;
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Invalid id"});
      }
      const singleUpdateTask = await feedbackModel.findByIdAndUpdate({
        id:id,
      },
      {
         ...req.body,
      });
      res.status(200).json(singleUpdateTask)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    
}

const deleteSingleTask = async (req, res)=>{
    try {
      const {id} = req.params;
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Invalid id"});
      }
      const deleteSingleTask = await feedbackModel.findByIdAndDelete(id);
      res.status(200).json(deleteSingleTask)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    
}


const createTasks = async (req, res) => {
  try {
      const tasks = req.body; // Array of task objects
      const createdTasks = await feedbackModel.insertMany(tasks); // Bulk insert
      res.status(200).json(createdTasks);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};
const updateTasks = async (req, res) => {
  try {
      const tasks = req.body; // Array of task objects with _id for each task
      const updatePromises = tasks.map(task =>
        feedbackModel.findOneAndUpdate({ id: task.id }, task, { new: true }) // Query by `id`
      );
      const updatedTasks = await Promise.all(updatePromises);
      res.status(200).json(updatedTasks);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const deleteTasks = async (req, res) => {
  try {
      const ids = req.body; // Array of IDs to delete
      const deletedTasks = await feedbackModel.deleteMany({ id: { $in: ids } });
      res.status(200).json(deletedTasks);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};



module.exports = {createTask,getTasks,getSingleTask,updateSingleTask,deleteSingleTask,createTasks,updateTasks,deleteTasks}

