import axios from 'axios'
import { useEffect, useState } from 'react'
import ContactMe from '../components/ContactMe'

// const [newForm, setForm] = useState({
//   name: '',
//   email: '',
//   subject: '',
//   message: ''
// })

// const addForm = (e) => {
//   e.preventDefault()
//   setForm({ name: '', email: '', subject: '', message: '' })
// }

// const handleChange = (e) => {
//   setForm({ ...newForm, [e.target.name]: e.target.value })
// }
const Form = () => {
  const [form, setForm] = useState([])

  const getForm = async () => {
    const res = await axios.get('http://localhost:3001/api/form')
    setForm(res.data)
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
