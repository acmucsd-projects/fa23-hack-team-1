const express = require('express');
const foodModel = require('../models/food');
const router = express.Router();

router.get('/food', async (req, res) =>{
    const foods = await foodModel.find().exec();
    res.status(200).json({foods});
});

router.post('/food', async (req, res) =>{
    const { food } = req.body;
    const {name, calories, fat,cholesterol, sodium, carbohydrates, fiber, sugar, protein} = food;
    if (!name){
        res.status(400).json({error: "Invalid Input"});
    }
    else{
        const newFood = await foodModel.create(food);
        res.status(200).json({newFood});
    }
});

module.exports = router;