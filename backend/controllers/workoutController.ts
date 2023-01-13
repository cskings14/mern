const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');
import { Router, Request, Response } from "express";

// get all workouts
const getWorkouts = async (req: Request, res: Response) => {
    const workouts = await Workout.find({}).sort({createdAt: -1}) // newest first
    res.status(200).json(workouts);
}

// get a single workout
const getWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectID.isValid(id)) {
        return res.status(404).json({error: 'Invalid Workout'})
    }
    
    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({error: 'Not Found'});
    }

    res.status(200).json(workout);
}

//create a new workout
const createWorkout = async (req: Request, res: Response) => {
    const {title, reps, sets} = req.body // creates the body with title,reps, and sets
    // add document or the model object to db
    try {
        const workout = await Workout.create({title, reps, sets});
        res.status(200).json(workout);
    } catch(e: any) {
        res.status(404).json({error: e.message});
    }

    res.json({message: 'post a new workout'});
}

// delete a workout
const deleteWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid Workout'})
    }
    
    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({error: 'No such workout to delete'});
    }

    res.status(200).json(workout);
}

// update a workout
const updateWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid Workout'})
    }
    
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body 
    });

    if (!workout) {
        return res.status(404).json({error: 'Not such workout to updat'});
    }

    res.status(200).json(workout)
}




module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

}