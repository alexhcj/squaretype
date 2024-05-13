import { model, Schema } from 'mongoose'

const Contact = new Schema(
  {
    contact: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    subsTotal: {
      type: Number,
      default: undefined
    },
    subsType: {
      type: String,
      required: true,
      default: undefined
    }
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id
        delete ret.__v
      }
    }
  }
)

export default model('contact', Contact)
