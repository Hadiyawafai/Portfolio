import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Education from './Pages/Education/Education'
import Login from './Pages/Login/Login'
import Contact from './Pages/Contact/Contact'
import Footer from './Common/Footer'
import Navbar from './Common/Navbar'
import Skills from './Pages/Skills/Skills'
import About from './Pages/About/About'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App