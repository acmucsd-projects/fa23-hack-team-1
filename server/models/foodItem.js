const mongoose = require('mongoose')

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String
    },
    calories: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('FoodItem', foodItemSchema)
