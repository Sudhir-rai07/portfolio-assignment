import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const handleTheme = () =>{
    setDarkTheme(prev => !prev)
  }
  return (
    <div className={`${darkTheme ? "bg-black":"bg-white text-black"} transition-colors duration-200`}>
      <Navbar theme={darkTheme} themeFn={handleTheme}/>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
