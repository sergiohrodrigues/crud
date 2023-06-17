import mongoose from "mongoose";

const URI = 'mongodb+srv://admin:gyzkakB4ViCPWgyY@cluster0.9agkzd9.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if(!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection