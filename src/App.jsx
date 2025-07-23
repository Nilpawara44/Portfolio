import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
