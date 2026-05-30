import mongoose, { Types } from 'mongoose'

const bedroomSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
  },
})

export const bedroomModel = mongoose.model('bedrooms', bedroomSchema)
