const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id
        delete ret._id
      }
    }
  }
)

module.exports = model('user', schema)
