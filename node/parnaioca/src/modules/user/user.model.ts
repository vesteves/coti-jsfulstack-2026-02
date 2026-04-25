import mongoose, { Types } from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
})

export const userModel = mongoose.model('users', userSchema)
