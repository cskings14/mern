import { Router, Request, Response } from "express";

const express = require('express');

const router = express.Router()

// This is the workout Listview component
router.get('/', (req: Request, res: Response) => {
    res.json({message: 'Get all workouts'});
})

// Detail view for one workout
router.get('/:id', (req: Request, res: Response) => {
    res.json({message: 'view this workout'});
})

// Post a new workout
router.post('/:id', (req: Request, res: Response) => {
    res.json({message: 'post a new workout'});
})

// Delete an existing workout
router.delete('/:id', (req: Request, res: Response) => {
    res.json({message: 'delete a workout'});
})

// Update an existing workout
router.patch('/:id', (req: Request, res: Response) => {
    res.json({message: 'Update this workout'});
})


module.exports = router;
