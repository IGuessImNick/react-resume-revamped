import React from 'react'
import "./testimonials.css"
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar1,
    name: 'Some Dude',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo sit adipisci optio! Tempore eligendi quia minus autem excepturi optio veniam iste facilis, maxime voluptate consequatur repellat dolorum eaque dolor?'
  },
  {
    avatar: Avatar2,
    name: 'Some Dude',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo sit adipisci optio! Tempore eligendi quia minus autem excepturi optio veniam iste facilis, maxime voluptate consequatur repellat dolorum eaque dolor?'
  },
  {
    avatar: Avatar3,
    name: 'Some Dude',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo sit adipisci optio! Tempore eligendi quia minus autem excepturi optio veniam iste facilis, maxime voluptate consequatur repellat dolorum eaque dolor?'
  },
  {
    avatar: Avatar4,
    name: 'Some Dude',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo sit adipisci optio! Tempore eligendi quia minus autem excepturi optio veniam iste facilis, maxime voluptate consequatur repellat dolorum eaque dolor?'
  }
]

const Testimonials = () => {
  return (
      <section id='testimonials'>
        <h5>Reviews</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
  )
}

export default Testimonials
