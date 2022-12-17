import React from 'react'
import "./header.css"
import CTA from './CTA'
import Me from '../../assets/me-new.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      {/* __ conve */}
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Nick Skinner</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={Me} alt="My profile pic" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>  
    </header>
  )
}

export default Header
