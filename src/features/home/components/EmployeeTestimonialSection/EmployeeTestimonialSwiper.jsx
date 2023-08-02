import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import EmployeeTestimonialCard from "./EmployeeTestimonialCard"
import styled from "styled-components"
import {
  angeloWebp,
  annieWebp,
  glennWebp,
  iggyWebp,
  melvinWebp,
  princeWebp,
} from "../../../../assets"

const EmployeeTestimonialSwiper = () => {
  return (
    <>
      <SwiperStyled
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        grabCursor={true}
      >
        <SwiperSlide>
          <EmployeeTestimonialCard
            name='Annie'
            image={annieWebp}
            position='Sr. Software Engineeer'
            testimonial='"I got to learn new stacks and technology. is trying its best to improve and listen to employees needs and suggestions The people are friendly and approachable."'
          />
        </SwiperSlide>

        <SwiperSlide>
          <EmployeeTestimonialCard
            name='Angelo'
            image={angeloWebp}
            position='Mid Software Engineeer'
            testimonial='"My favorite aspects of working here are without a doubt the potential for growth and the individuals I can grow with."'
          />
        </SwiperSlide>

        <SwiperSlide>
          <EmployeeTestimonialCard
            name='Prince'
            image={princeWebp}
            position='Jr. Software Engineeer'
            testimonial='"Very kind, supportive and friendly people. The benefits and incentives that the company offered. Work setup (currently working in the convenience of our home)"'
          />
        </SwiperSlide>

        <SwiperSlide>
          <EmployeeTestimonialCard
            name='Iggy'
            image={iggyWebp}
            position='Sr. Software Engineeer'
            testimonial='"I  like that I am learning and experiencing a wide variety of technical stacks and methodologies that are best used in Web and Mobile development and being able to work with other people."'
          />
        </SwiperSlide>

        <SwiperSlide>
          <EmployeeTestimonialCard
            name='Melvin'
            image={melvinWebp}
            position='Jr. Software Engineeer'
            testimonial='"The reason why I enjoy working in BGM is we always learn how to adapt well and fast to new technology."'
          />
        </SwiperSlide>

        <SwiperSlide>
          <EmployeeTestimonialCard
            name='Glenn'
            image={glennWebp}
            position='Web Developer'
            testimonial='"It’s a continuous learning experience. It’s here in BGM where I was given an opportunity to take on new tasks and ended up on loving them. Hired as software engineer, improved as infrastructure engineer."'
          />
        </SwiperSlide>
      </SwiperStyled>
    </>
  )
}

export default EmployeeTestimonialSwiper

const SwiperStyled = styled(Swiper)`
  & .swiper-wrapper {
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--bs-secondary);
    &::after {
      color: var(--bs-white);
      font-size: 1rem;
      font-weight: bold;
    }
  }
`
