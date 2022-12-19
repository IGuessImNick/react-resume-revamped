import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Nick Skinner</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/nicholas-skinner-0b717099/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/IGuessImNick" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/iguessimnick/" target="_blank"><SiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; IGuessImNick. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
