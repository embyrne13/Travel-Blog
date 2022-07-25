import React, { useState } from 'react'
import axios from 'axios'

const CommentForm = (props) => {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [comment, setComment] = useState('')

  const addComment = async (e) => {
    await axios.post('http://localhost:3001/comment' + props.id, {
      name: name,
      city: props.id,
      comment: comment
    })

    setName('')
  }

  const changeName = (event) => {
    let n = event.target.value
    setName(n)
  }
  const changeCity = (event) => {
    let n = event.target.value
    setCity(n)
  }
  const changeComment = (event) => {
    let n = event.target.value
    setComment(n)
  }

  const handleSubmit = (e) => {
    addComment(e)
    console.lot(props.comment)
  }

  return (
    <div className="form">
      <h1>Add A Comment</h1>
      <div className="input-div">
        <form onSubmit={handleSubmit}>
          <div className="name-city-comment">
            <input
              type="text"
              value={name}
              onChange={changeName}
              name={'name'}
              placeholder={'name'}
            />
            <input
              type="text"
              value={city}
              onChange={changeCity}
              name={'city'}
              placeholder={'city'}
            />
            <input
              type="text"
              value={comment}
              onChange={changeComment}
              name={'comment'}
              placeholder={'comment'}
            />
          </div>
          <button id="form-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CommentForm
