const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl = process.env.MONGODB_URI
// === 'production'
// ? process.env.MONGODB_URI
// : 'mongodb://127.0.0.1:27017/<database_name>'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
