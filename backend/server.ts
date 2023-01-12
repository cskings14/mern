import { Request, Response, NextFunction } from "express";
require('dotenv').config(); // uses .env for the localhost port
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// this is the express app
const app = express();

//middleware
app.use(express.json()); // this will get json data from the request
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method)
    next()
})

// if I go to this route, the workoutRoutes will be available
app.use('/api/workouts', workoutRoutes);



//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            // we then want to listen for requests
            console.log(`listening to port, ${process.env.PORT}`);
        });
    })
    .catch((error: any) => {
        console.log(error);
    })




