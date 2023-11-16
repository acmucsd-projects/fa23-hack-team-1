const express = require('express');
const foodModel = require('../models/food');
const router = express.Router();

router.get('/food/:id', async (req, res) =>{
    try{
        const { id } = req.params;
        const foods = await foodModel.findById(id).exec();
        res.status(200).json({foods});
    }
    catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

router.get('/food', async (req, res) =>{
    try{
        const foods = await foodModel.find().exec();
        res.status(200).json({foods});
    }
    catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

router.post('/food', async (req, res) =>{
    const { food } = req.body;
    const {name, calories, fat,cholesterol, sodium, carbohydrates, fiber, sugar, protein} = food;
    if (!name || !calories || !fat || !cholesterol || !sodium || !carbohydrates || !fiber || !sugar || !protein){
        res.status(400).json({error: "Invalid Input"});
    }
    else{
        const newFood = await foodModel.create(food);
        res.status(200).json({newFood});
    }
});

router.put('/food/:id', async (req, res) =>{
    try {
        const {name, calories, fat,cholesterol, sodium, carbohydrates, fiber, sugar, protein} = food;

        if (!name || !calories || !fat || !cholesterol || !sodium || !carbohydrates || !fiber || !sugar || !protein){
            res.status(400).json({error: "Invalid Input"});
        }
        else{
            const { id } = req.params;
            const result = await foodModel.findByIdAndUpdate(id, req.body);
            res.status(200).send({ message: "Updated successfully"});
        }
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

router.delete('/food/:id', async (req, res) =>{
    try{
        const { id } = req.params;

        const result = await foodModel.findByIdAndDelete(id);

        if (!result){
            res.status(404).json({ message: 'Book not found'});
        }
        res.status(200).send({ message: 'Deleted successfully'});
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})
module.exports = router;