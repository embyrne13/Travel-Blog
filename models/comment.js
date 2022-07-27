const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    name: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'City' },
    comment: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)
