const mongoose = require('mongoose');

// const Schema = mongoose.Schema

// a schema is the structure of the document that we save
const workoutSchema = mongoose.Schema({
    title: {
        type: String,
        reuired: true
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    }

}, {timeStamps: true});

module.exports = mongoose.model("Workout", workoutSchema)


// a model is what we use the methods on for CRUD Functionality
// workoutSchema.find()