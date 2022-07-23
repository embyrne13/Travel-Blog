const Comment = require('../models/comment')

const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    const update = await Comment.findByIdAndUpdate(id)
    res.status(200).json(update)
    if (update) {
      return res.status(200).send('Comment updated')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  updateComment,
  deleteComment
}
