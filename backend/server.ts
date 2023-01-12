import { Request, Response } from "express";
const express = require('express');

// this is the express app
const app = express();


app.get('/', (req: Request, res: Response) => {
    res.json({message: "Welcome!"})
})

// we then want to listen for requests

app.listen(4000, () => {
    console.log('listening to port 4000');
});

