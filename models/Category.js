import { model, Schema } from 'mongoose'

const Category = new Schema(
  {
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id
        delete ret.id
      }
    }
  }
)

export default model('category', Category)
