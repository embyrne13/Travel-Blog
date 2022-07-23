const { Router } = require('express')
const router = Router()
const Content = require('../models/content')
const Comment = require('../models/comment')
const Form = require('../models/form')
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/content', async (req, res) => {
  const contents = await Content.find({})
  res.json(contents)
})

router.get('/content/:id', async (req, res) => {
  try {
    const { id } = req.params
    const content = await Content.findById(id)
    if (!content) throw Error('Comment not found')
    res.json(content)
  } catch (e) {
    console.log(e)
    res.send('Comment not found!')
  }
})
router.get('/comment', async (req, res) => {
  const comments = await Comment.find({})
  res.json(comments)
})

router.get('/comment/:id', async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.find({ content: id })
    if (!comment) throw Error('Comment not found')
    res.json(comment)
  } catch (e) {
    console.log(e)
    res.send('Comment not found!')
  }
})
// router.post('/comment/:id', async (req, res) => {
//   try {
//     const comment = await new Comment(req.body)
//     await comment.save()
//     return res.status(201).json({
//       comment
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// // })
// router.put('/comment/:id', controllers.updateComment)
// router.delete('/comment/:id', controllers.deleteComment)
router.post('/form', async (req, res) => {
  try {
    const form = await new Form(req.body)
    await form.save()
    return res.status(201).json({
      form
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})
module.exports = router
