const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Example for foodSchema. Maybe add dining hall or image?
const foodSchema = new Schema({
    name: String,
    calories: Number,
    fat: Number,
    cholesterol: Number,
    sodium: Number,
    carbohydrates: Number,
    fiber: Number,
    sugar: Number,
    protein: Number
});

const foodModel = mongoose.model('foodModel', foodSchema);
module.exports = foodModel;