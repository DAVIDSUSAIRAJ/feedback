const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    title:{
     type:String,
     require:true,
    },
    description:{
        type:String,

    }

},
{
    timestamps:true,
}

);

module.exports = mongoose.model("CRUD",FeedbackSchema)