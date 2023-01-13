import { Router, Request, Response } from "express";
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController')

const express = require('express');

const router = express.Router()

// This is the workout Listview component
router.get('/', getWorkouts);

// Detail view for one workout
router.get('/:id', getWorkout);

// Post a new workout
router.post('/', createWorkout);

// Delete an existing workout
router.delete('/:id', deleteWorkout);

// Update an existing workout
router.patch('/:id', updateWorkout);

module.exports = router;
