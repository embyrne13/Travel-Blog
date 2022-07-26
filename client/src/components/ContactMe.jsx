import { useNavigate } from 'react-router-dom'
const Contact = (props) => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    props.addForm(e)
    navigate('/form')
  }

  const newForm = props.newForm

  return (
    <div className="formsub">
      <h1 className="intro">
        Feel free to contact me about anything! Don't see travel tips for a
        destination you're traveling to? Want a guide for that destination? Your
        wish is my command! I will do my best to create one based on your
        request!
      </h1>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={props.name}
            onChange={props.handleChange}
            name={'name'}
            placeholder={'name'}
          />
          <input
            type="text"
            value={props.email}
            onChange={props.handleChange}
            name={'email'}
            placeholder={'email'}
          />
          <input
            type="text"
            value={props.subject}
            onChange={props.handleChange}
            name={'subject'}
            placeholder={'subject'}
          />
          <input
            className="message"
            type="text"
            value={props.message}
            onChange={props.handleChange}
            name={'message'}
            placeholder={'message'}
          />
          <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
