import mongoose from 'mongoose'

const customerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      default: 0,
    },
    house: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status1: {
      type: Boolean,
      required: true,
      default: false,
    },
    status2: {
      type: Boolean,
      required: true,
      default: false,
    },
    status3: {
      type: Boolean,
      required: true,
      default: false,
    },
    status4: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
const Customer = mongoose.model('Customer', customerSchema)
export default Customer
