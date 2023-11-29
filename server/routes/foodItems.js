const express = require('express')
const router = express.Router()
const FoodItem = require('../models/foodItem')

// Get all (async function to retrieve foodItems)
router.get('/', async (req, res) => {
    try {
        //find all documents of the FoodItem model
        const foodItems = await FoodItem.find()
        res.json(foodItems)
    } catch (err) {
        //500 means error on your server
        res.status(500).json({message: err.message})
    }
})
// Get one
router.get('/:id', getFoodItem, (req, res) => {
    res.json(res.foodItem)
})
// Create one (async function to .save() to Mongo)
router.post('/', async (req, res) => {
    const foodItem = new FoodItem({
        name: req.body.name,
        amount: req.body.amount,
        calories: req.body.calories
    })
    try {
        // newFoodItem stores the exact data stored in the DB, with the _id and v fields
        const newFoodItem = await foodItem.save()
        // status 201 means successful creation of document
        res.status(201).json(newFoodItem)
    } catch (err) {
        // 400 means error with USER INPUT, not server
        res.status(400).json({message: err.message})
    }
})
// Update one
router.patch('/:id', getFoodItem, async (req, res) => {
    if (req.body.name != null) {
        res.foodItem.name = req.body.name
    }
    if (req.body.amount != null) {
        res.foodItem.amount = req.body.amount
    }
    if (req.body.calories != null) {
        res.foodItem.calories = req.body.calories
    }

    try {
        const updatedFoodItem = await res.foodItem.save()
        res.json(updatedFoodItem)
    } catch (err) {
        res.status(400).json({message: err.message})

    }
})
// Delete one (async function that calls .remove() on a DB document)
router.delete('/:id', getFoodItem, async (req, res) => {
    try {
        await res.foodItem.remove()
        res.json({message: 'Deleted foodItem'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


// use a middleware to get the specific FoodItem with the specific id
// async function to fetch FoodItem document with specific id
async function getFoodItem(req, res, next) {
    let foodItem
    try {
        foodItem = await FoodItem.findById(req.params.id)
        if (foodItem == null) {
            // 404 means "could not find"
            return res.status(404).json({message: 'Cannot find foodItem'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    // above REST blocks can directly access foodItem with res.foodItem field
    res.foodItem = foodItem
    // passes control to next middleware/request
    next()
}

module.exports = router
