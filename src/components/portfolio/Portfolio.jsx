import React from 'react'
import "./portfolio.css"
import Img1 from '../../assets/Rise_logo.jpg'
import Img2 from '../../assets/readme.png'
import Img3 from '../../assets/your-next-app.jpg'


// const data = [
//   {
//     id: 1,
//     image: Img1,
//     title: 'Rise Blog - Under Development',
//     github: 'https://github.com',
//     demo: 'https://github.com'
//   },
//   {
//     id: 2,
//     image: Img2,
//     title: 'Easy ReadMe Generator',
//     github: 'https://github.com/IGuessImNick/homework-09-readme-generator',
//     demo: 'https://github.com/IGuessImNick/homework-09-readme-generator'
//   },
//   {
//     id: 3,
//     image: Img3,
//     title: 'Yours?',
//     github: '#contact',
//     demo: '#contact'
//   }
// ]


const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {/* datamap method -> wrap inside javascript {} and have element inside return() statement */}

        {/* {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={image} alt="" className='portfolio__image'/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Visit</a>
                </div>
              </article>
            )
          })
        } */}



        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img1} alt="" className='portfolio__image'/>
          </div>
          <h3>Rise Blog - Under Development</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target="_blank" rel="noreferrer">Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img2} alt="" className='portfolio__image'/>
          </div>
          <h3>Easy ReadMe Generator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/IGuessImNick/homework-09-readme-generator" className='btn' target="_blank" rel="noreferrer">Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img3} alt="" className='portfolio__image'/>
          </div>
          <h3>Your Next Project?</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className='btn' >Let's Chat</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
