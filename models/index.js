const mongoose = require('mongoose')
const commentSchema = require('./comment')
const formSchema = require('./form')
const contentSchema = require('./content')

const Comment = mongoose.model('Comment', commentSchema)
const Form = mongoose.model('Form', contentSchema)
const Content = mongoose.model('Content', contentSchema)

module.exports = {
  Comment,
  Content
  // Form
}
