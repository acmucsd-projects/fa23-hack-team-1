const express = require('express');
const workoutModel = require('../models/workouts');
const router = express.Router();

router.get('/', async (req, res) =>{
    const workouts = await workoutModel.find().exec();
    res.status(200).json({workouts});
});


router.post('/', async (req, res) =>{
    const { workout } = req.body;
    const {name, repetitions, sets, weight} = workout;
    if (!name || !repetitions || !sets || !weight){
        res.status(400).json({error: "Invalid Input"});
    }
    else{
        const newWorkout = await workoutModel.create(workout);
        res.status(200).json({newWorkout});
    }
});

module.exports = router;