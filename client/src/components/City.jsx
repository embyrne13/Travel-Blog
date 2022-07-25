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
  const [getc, setGetc] = useState({})
  const getComment = async () => {
    const res = await axios.get(`http://localhost:3001/api/content/${id}`)
    setGetc(res.data)
  }

  useEffect(() => {
    getComment()
  }, [])
  const [postc, setPostc] = useState({})
  const postComment = async () => {
    const res = await axios.post(`http://localhost:3001/api/content/${id}`)
    setPostc(res.data)
  }

  useEffect(() => {
    postComment()
  }, [])

  const [upc, setUpc] = useState({})
  const updateComment = async () => {
    const res = await axios.put(`http://localhost:3001/api/content/${id}`)
    setUpc(res.data)
  }
  useEffect(() => {
    updateComment()
  }, [])
  const [delc, setDelc] = useState({})
  const deleteComment = async () => {
    const res = await axios.post(`http://localhost:3001/api/content/${id}`)
    setDelc(res.data)
  }
  useEffect(() => {
    deleteComment()
  }, [])

  return <div className="des">{city.description}</div>
}

export default City
