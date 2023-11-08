const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Example for foodSchema. Maybe add dining hall or image?
const wourkoutSchema = new Schema({
    name: String,
    repetitions: Number,
    sets: Number,
    weight: Number
});

const workoutModel = mongoose.model('workoutModel', workoutModelSchema);
module.exports = workoutModel;