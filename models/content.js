const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contentSchema = new Schema(
  {
    name: { type: String, required: true },
    description1: { type: String, required: true },
    description2: { type: String, required: true },
    description3: { type: String, required: true },
    description4: { type: String, required: true },
    description5: { type: String, required: true },
    description6: { type: String, required: true },
    description7: { type: String, required: true },
    description8: { type: String, required: true },
    description9: { type: String, required: true },
    description10: { type: String, required: true },
    description11: { type: String, required: true },

    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Content', contentSchema)
