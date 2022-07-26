import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Banana(props) {
  const [isFormActive, setIsFormActive] = useState(false)
  const [namevalue, setName] = useState('')
  const [comment, setComment] = useState('')
  let { id } = useParams()
  const [getc, setGetc] = useState(null)
  useEffect(() => {
    setName(props.comment.name)
    setComment(props.comment.comment)
  }, [])
  const toggleActive = () => {
    setIsFormActive(!isFormActive)
  }

  const [upc, setUpc] = useState({})
  const updateComment = async (comment) => {
    const res = await axios.put(`http://localhost:3001/api/comment/${comment}`)
    setUpc(res.data)
    props.getComment()
  }
  const [delc, setDelc] = useState({})
  const deleteComment = async (comment) => {
    const res = await axios.delete(
      `http://localhost:3001/api/comment/${comment}`
    )
    setDelc(res.data)
    props.getComment()
  }
  return (
    <div>
      {isFormActive ? (
        <div>
          <form className="edit">
            <textarea
              type="text"
              value={namevalue}
              onChange={(e) => setUpc(e.target.value)}
              name={'name'}
              placeholder={'name'}
            />
            <textarea
              type="text"
              value={comment}
              onChange={(e) => setUpc(e.target.value)}
              name={'comment'}
              placeholder={'comment'}
            />
            {
              <button type="submit" id="editsubmit">
                Submit
              </button>
            }
          </form>{' '}
        </div>
      ) : (
        <div>
          <div className="commentinfo">
            <h2>
              Name:
              {props.comment.name}
            </h2>
            <h2>Comment: {props.comment.comment}</h2>
            <button onClick={toggleActive}>Edit </button>
            <button onClick={() => deleteComment(props.comment._id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
