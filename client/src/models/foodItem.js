import mongoose, {Schema} from "mongoose";

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
    },
    date: {
        type: Number,
        
    }
})

const FoodItem = mongoose.models.FoodItem || mongoose.model('FoodItem', foodItemSchema);
export default FoodItem;
