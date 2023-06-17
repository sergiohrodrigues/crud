import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String, require: true, unique: true },
    item: { type: String, require: true }
})

export default mongoose.models.User || mongoose.model('User', userSchema)