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
          <div className="display">
            <div className="cityinfo">
              <img src={content.image} className="cityimage" alt="city" />
              <div className="cityname">
                <h2 className="cityname">{content.name}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cities
