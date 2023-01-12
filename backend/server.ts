import { Request, Response, NextFunction } from "express";
require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');

// this is the express app
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method)
    next()
})

// if I go to this route, the workoutRoutes will be available
app.use('/api/workouts', workoutRoutes);

// we then want to listen for requests

app.listen(process.env.PORT, () => {
    console.log(`listening to port, ${process.env.PORT}`);
});

