import { Schema, model } from 'mongoose'
import Category from './Category.js'

const Post = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: Category.modelName
    },
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    views: {
      type: Number
    },
    shares: {
      type: Number
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

export default model('post', Post)
