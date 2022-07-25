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
          <div className="cityinfo">
            <div className="cityimage">
              <img src={content.image} alt="city" />
            </div>
            <div className="cityname">
              <h2>{content.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cities
