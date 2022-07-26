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
      <div className="des">{city.description}</div>
      <div className="Comment">{<Comment />}</div>
    </div>
  )
}

export default City
