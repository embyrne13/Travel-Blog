import { useNavigate } from 'react-router-dom'

const Cities = (props) => {
  let navigate = useNavigate()
  const showCity = (content) => {
    navigate(`${content._id}`)
  }
  return (
    <div className="cities">
      {props.content.map((content) => (
        <div key={props.name} onClick={() => showCity(content)}>
          <div className="city info">
            <h2>{content.description}</h2>
            <img src={content.image} alt="City" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cities
