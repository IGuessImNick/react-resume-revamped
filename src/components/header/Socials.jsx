import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nicholas-skinner-0b717099/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/IGuessImNick" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/iguessimnick/" target="_blank"><SiInstagram/></a>
    </div>
  )
}

export default Socials
