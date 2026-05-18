import { Schema, model } from 'mongoose'

const Instagram = new Schema(
  {
    img: {
      type: String,
      required: true
    },
    comments: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      required: true
    },
    updatedAt: {
      type: Date,
      required: true
    }
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

export default model('instagram', Instagram)