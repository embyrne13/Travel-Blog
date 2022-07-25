import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Comment = (props) => {
  const [namevalue, setName] = useState('')
  const [comment, setComment] = useState('')
  const [getc, setGetc] = useState(null)
  let { id } = useParams()
  const getComment = async () => {
    const res = await axios.get(`http://localhost:3001/api/comment/${id}`)
    setGetc(res.data)
  }
  useEffect(() => {
    getComment()
  }, [])

  const addComment = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost:3001/api/comment/${id}`, {
      name: namevalue,
      city: id,
      comment: comment
    })
    getComment()
  }

  const [upc, setUpc] = useState({})
  const updateComment = async (comment) => {
    const res = await axios.put(`http://localhost:3001/api/comment/${comment}`)
    setUpc(res.data)
    getComment()
  }
  const [delc, setDelc] = useState({})
  const deleteComment = async (comment) => {
    const res = await axios.delete(
      `http://localhost:3001/api/comment/${comment}`
    )
    setDelc(res.data)
    getComment()
  }

  return (
    <div>
      {getc?.map((comment) => (
        <div className="commentinfo">
          <h2>
            Name:
            {comment.name}
          </h2>
          <h2>Comment: {comment.comment}</h2>
          <button onClick={updateComment}>Edit </button>
          <button onClick={() => deleteComment(comment._id)}>Delete </button>
        </div>
      ))}
      <div className="form">
        <h1>Add A Comment</h1>
        <div className="input-div">
          <form onSubmit={addComment}>
            <div className="name-comment">
              <input
                type="text"
                value={namevalue}
                onChange={(e) => setName(e.target.value)}
                name={'name'}
                placeholder={'name'}
              />
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                name={'comment'}
                placeholder={'comment'}
              />
            </div>
            <button id="form-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Comment
