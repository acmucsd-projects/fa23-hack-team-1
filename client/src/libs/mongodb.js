import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("connected to mongo")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;
