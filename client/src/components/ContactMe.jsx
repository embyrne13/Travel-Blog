// import axios from 'axios'
// import { useState } from 'react'

const form = ({ info }) => {
  // const [form, setForm] = useState('')

  // const handleForm = async (e) => {
  //   e.preventDefault()
  //   const res = await axios.post('http://localhost:3001/api/form', {
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   })
  //   info.Form.push({ name: '', email: '', subject: '', message: '' })
  //   setForm('')
  // }

  return (
    // <div className="formshow">
    //   <form onSubmit={handleForm}>
    //     <input
    //       type="text"
    //       name="search"
    //       value={info.name}
    //       placeholder="Name"
    //       onChange={(e) => {
    //         setForm(e.target.value)
    //       }}
    //     >
    //       <input
    //         type="text"
    //         name="search"
    //         value={info.email}
    //         placeholder="Email"
    //         onChange={(e) => {
    //           setForm(e.target.value)
    //         }}
    //       ></input>
    //       <input
    //         type="text"
    //         name="search"
    //         value={info.subject}
    //         placeholder="Subject"
    //         onChange={(e) => {
    //           setForm(e.target.value)
    //         }}
    //       ></input>
    //       <input
    //         type="text"
    //         name="search"
    //         value={info.message}
    //         placeholder="Message"
    //         onChange={(e) => {
    //           setForm(e.target.value)
    //         }}
    //       ></input>
    //     </input>{' '}
    //     {form.form}
    // </form>
    <form className="form">
      <div className="intro">
        <h1>
          Feel free to contact me about anything! Don't see travel tips for a
          destination you're traveling to? Want a guide for that destination?
          Your wish is my command! I will do my best to create one based on your
          request!
        </h1>
        {/* <div>
        Form
        {info.Form.map((info) => [
          <p>
            {info.name} {info.email}
            {info.subject}
            {info.message}
          </p>
        ])}
      </div> */}
      </div>
    </form>
    // </div>
  )
}
export default form
// import { useNavigate } from 'react-router-dom'
// const Form = (props) => {
//   let navigate = useNavigate()
//   const handleSubmit = (e) => {
//     props.addForm(e)
//     navigate('/form')
//   }

//   const newForm = props.newForm

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newForm.name}
//           onChange={props.handleChange}
//           name={'name'}
//           placeholder={'name'}
//         />
//         <input
//           type="text"
//           value={newForm.email}
//           onChange={props.handleChange}
//           name={'email'}
//           placeholder={'email'}
//         />
//         <input
//           type="text"
//           value={newForm.subject}
//           onChange={props.handleChange}
//           name={'subject'}
//           placeholder={'subject'}
//         />
//         <input
//           type="text"
//           value={newForm.message}
//           onChange={props.handleChange}
//           name={'message'}
//           placeholder={'message'}
//         />
//         <button>Submit</button>
//       </form>
//       <div className="formsub">
//         <h1>
//           Feel free to contact me about anything! Don't see travel tips for a
//           destination you're traveling to? Want a guide for that destination?
//           Your wish is my command! I will do my best to create one based on your
//           request!
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default Form
