import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Edit(props) {
  const [isFormActive, setIsFormActive] = useState(false)
  const [namevalue, setName] = useState(props.comment.name)
  const [comment, setComment] = useState(props.comment.comment)
  let { id } = useParams()
  const [getc, setGetc] = useState(null)
  const toggleActive = () => {
    setIsFormActive(!isFormActive)
  }

  const [upc, setUpc] = useState({})
  const updateComment = async (e) => {
    const res = await axios.put(`/api/comment/${props.comment._id}`, {
      name: namevalue,
      comment: comment,
      city: id
    })
    setUpc(res.data)
    props.getComment()
  }
  const [delc, setDelc] = useState({})
  const deleteComment = async (comment) => {
    const res = await axios.delete(`/api/comment/${comment}`)
    setDelc(res.data)
    props.getComment()
  }
  return (
    <div>
      {isFormActive ? (
        <div>
          <form className="edit" onSubmit={updateComment}>
            <textarea
              className="edittext"
              type="text"
              value={namevalue}
              onChange={(e) => setName(e.target.value)}
              name={'name'}
              placeholder={'name'}
            />
            <textarea
              className="edittext"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name={'comment'}
              placeholder={'comment'}
            />
            <button type="submit" onClick={props.getComment}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="commentinfo">
            <h2 className="card">Name: {props.comment.name}</h2>
            <h2 className="card">Comment: {props.comment.comment}</h2>
            <button onClick={toggleActive}> ✏️</button>
            <button onClick={() => deleteComment(props.comment._id)}>🗑️</button>
          </div>
        </div>
      )}
    </div>
  )
}
