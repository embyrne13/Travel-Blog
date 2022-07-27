import Cities from '../components/Cities'
import axios from 'axios'
import { useState, useEffect } from 'react'
const Home = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    const getContent = async () => {
      const response = await axios.get('/api/content')
      setContent(response.data)
    }
    getContent()
  }, [])
  return (
    <div>
      <Cities content={content} />
    </div>
  )
}

export default Home
