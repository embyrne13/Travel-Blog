import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Edit from './Edit'

const Comment = (props) => {
  const [getc, setGetc] = useState(null)
  const [namevalue, setName] = useState('')
  const [comment, setComment] = useState('')
  let { id } = useParams()
  const getComment = async () => {
    const res = await axios.get(`/api/comment/${id}`)
    setGetc(res.data)
  }
  useEffect(() => {
    getComment()
  }, [])
  const addComment = async (e) => {
    e.preventDefault()
    await axios.post(`/api/comment/${id}`, {
      name: namevalue,
      city: id,
      comment: comment
    })
    getComment()
    setName('')
    setComment('')
  }
  return (
    <div className="fo">
      {getc?.map((comment) => (
        <Edit comment={comment} getComment={getComment} />
      ))}
      <div className="comform">
        <h1 className="add">Add A Comment</h1>
        <div className="input-div">
          <form onSubmit={addComment}>
            <div className="name-comment">
              <input
                className="name"
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
