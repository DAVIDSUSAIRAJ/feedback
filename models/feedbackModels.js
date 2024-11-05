const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    id: {
        type: Number,
        required: true,
        unique: true, // Ensure this id is unique
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("CRUD", FeedbackSchema);
