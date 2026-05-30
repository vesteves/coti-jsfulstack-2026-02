import mongoose, { Types, Schema } from 'mongoose'

const reservationSchema = new mongoose.Schema({
  checkinAt: {
    type: Date,
  },
  checkoutAt: {
    type: Date,
  },
  price: {
    type: Number,
    required: true
  },
  deletedAt: {
    type: Date,
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'guests'
  },
  bedroom: {
    type: Schema.Types.ObjectId,
    ref: 'bedrooms'
  }
})

export const reservationModel = mongoose.model('reservations', reservationSchema)
