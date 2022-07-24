import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    const getContent = async () => {
      const response = await axios.get('http://localhost:3001/api/content')
      setContent(response.data)
    }
    getContent()
  }, [])
  return (
    <div className="page">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home content={content} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
