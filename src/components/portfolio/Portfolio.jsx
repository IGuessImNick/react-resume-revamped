import React from 'react'
import "./portfolio.css"
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: Img1,
    title: 'Here is the title of the project',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: Img2,
    title: 'Here is the title of the project',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: Img3,
    title: 'Here is the title of the project',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: Img4,
    title: 'Here is the title of the project',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: Img5,
    title: 'Here is the title of the project',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: Img6,
    title: 'Here is the title of the project',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]


const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {/* datamap method -> wrap inside javascript {} and have element inside return() statement */}

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }



        {/* <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
