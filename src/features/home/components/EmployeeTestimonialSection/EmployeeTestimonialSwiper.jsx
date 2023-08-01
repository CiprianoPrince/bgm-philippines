import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import EmployeeTestimonialCard from "./EmployeeTestimonialCard"
import styled from "styled-components"

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
          <EmployeeTestimonialCard />
        </SwiperSlide>

        <SwiperSlide>
          <EmployeeTestimonialCard />
        </SwiperSlide>

        <SwiperSlide>
          <EmployeeTestimonialCard />
        </SwiperSlide>

        <SwiperSlide>
          <EmployeeTestimonialCard />
        </SwiperSlide>

        <SwiperSlide c>
          <EmployeeTestimonialCard />
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
