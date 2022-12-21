import React from 'react'
import "./about.css"
import AboutMe from '../../assets/me-outside.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={AboutMe} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Content Creation & Design </small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Growing constantly!</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Always looking for more!</small>
            </article>
          </div>

          <p>
            Thanks for checking out my portfolio! This whole website was created with React.js and simple CSS tricks. My name is Nick, I am a Full Stack Developer with an eye for design and cool online effects. In my spare time I write music, design games, and take walks to look for friendly neighborhood cats.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About
