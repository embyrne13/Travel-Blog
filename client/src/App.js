import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import React from 'react'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import City from './components/City'
const App = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/:id" element={<City />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
