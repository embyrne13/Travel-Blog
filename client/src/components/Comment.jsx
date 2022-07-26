import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Edit from './Edit'

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
    setName('')
    setComment('')
  }
  const handleChange = (event) => {
    getComment(event.target.value)
  }
  return (
    <div className="fo">
      {getc?.map((comment) => (
        <Edit
          comment={comment}
          getComment={getComment}
          onChange={handleChange}
        />
      ))}
      <div className="comform">
        <h1 className="add">Add A Comment</h1>
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
                className="comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                name={'comment'}
                placeholder={'comment'}
              />
            </div>
            <button className="form-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Comment
