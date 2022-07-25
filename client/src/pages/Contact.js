import axios from 'axios'
import { useEffect, useState } from 'react'
import ContactMe from '../components/ContactMe'

const Form = () => {
  const [form, setForm] = useState([])
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const getForm = async (props) => {
    const res = await axios.post('http://localhost:3001/api/form' + props.id, {
      name: name,
      city: props.id,
      comment: comment
    })
  }

  useEffect(() => {
    getForm()
  }, [])

  return (
    <div className="form">
      {form.map((form) => (
        <ContactMe info={form} key={form.name} />
      ))}
    </div>
  )
}

export default Form
