import { Schema, model } from 'mongoose'

const Instagram = new Schema(
  {
    img: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    comments: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    }
  }
)

export default model('instagram', Instagram)
