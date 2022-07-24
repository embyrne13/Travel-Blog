const form = ({ form }) => {
  return (
    <div className="form">
      <p className="name"> Name {form.name}</p>
      <div className="info-wrapper flex-col">
        <h3>
          <p> Email {form.email}</p>
          <p> Subject {form.subject}</p>
          <p> Message {form.message}</p>
        </h3>
      </div>
    </div>
  )
}
export default form
