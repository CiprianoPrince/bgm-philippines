import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import TrainingExperienceSwiperSlide from "./TrainingExperienceSwiperSlide"
import styled from "styled-components"

const TrainingExperienceSwiper = () => {
  return (
    <>
      <SwiperStyled
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <TrainingExperienceSwiperSlide />
        </SwiperSlide>

        <SwiperSlide>
          <TrainingExperienceSwiperSlide />
        </SwiperSlide>

        <SwiperSlide>
          <TrainingExperienceSwiperSlide />
        </SwiperSlide>

        <SwiperSlide>
          <TrainingExperienceSwiperSlide />
        </SwiperSlide>
      </SwiperStyled>
    </>
  )
}

export default TrainingExperienceSwiper

const SwiperStyled = styled(Swiper)`
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
