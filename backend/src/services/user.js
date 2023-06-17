import databaseConnection from "../utils/database"
import User from "../models/user"

export const listItem = async () => {
    await databaseConnection()
    const users = await User.find()
    return users
}

export const createItem = async (user) => {
    await databaseConnection()
    const createdUser = await User.create(user)
    return createdUser
}

export const deleteItem = async (id) => {
    await databaseConnection()
    // await User.findByIdAndDelete(id)
    await User.deleteOne({id})
}

export const updateItem = async (id, newBody) => {
    await databaseConnection()
    // await User.findByIdAndUpdate(id, newBody)
    await User.updateOne({id}, newBody)
}