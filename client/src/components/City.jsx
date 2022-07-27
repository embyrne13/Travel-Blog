import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from '../components/Comment'
const City = () => {
  let { id } = useParams()
  const [city, setCity] = useState({})
  const getCity = async () => {
    const res = await axios.get(`http://localhost:3001/api/content/${id}`)
    setCity(res.data)
  }

  useEffect(() => {
    getCity()
  }, [])

  return (
    <div className="rev">
      <div className="des1">{city.description1}</div>
      <div className="des">{city.description2}</div>
      <div className="des">{city.description3}</div>
      <div className="des">{city.description4}</div>
      <div className="des">{city.description5}</div>
      <div className="des">{city.description6}</div>
      <div className="des">{city.description7}</div>
      <div className="des">{city.description8}</div>
      <div className="des">{city.description9}</div>
      <div className="des">{city.description10}</div>
      <div className="des11">{city.description11}</div>
      <div className="Comment">{<Comment />}</div>
    </div>
  )
}

export default City
