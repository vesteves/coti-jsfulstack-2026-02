import mongoose, { Types } from 'mongoose'

const guestSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  deletedAt: {
    type: Date,
  },
})

export const guestModel = mongoose.model('guests', guestSchema)
