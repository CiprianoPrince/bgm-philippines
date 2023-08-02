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
          <TrainingExperienceSwiperSlide
            name='Glenn'
            Position='Web Developer'
            experience='"10/10 po on the overall experience. This is my first time having a
          proper training before deployment on the project and for me this is a
          fun and helpful experience. The training exercises as well as the
          trainers are very helpful on refreshing basic knowledges, providing
          new techniques and introducing new technologies. For me the highlight
          of the whole training is the presentation part. It gives me more
          confidence in presenting my work and help me improve my skills based
          on the trainers feedback."'
          />
        </SwiperSlide>

        <SwiperSlide>
          <TrainingExperienceSwiperSlide
            name='Melvin'
            Position='Jr. Software Developer'
            experience={`"It was great, The training was organized from basics to advance and the 3 last parts of the training are connected, I like also the Alpha testing and Demo part, I've learned a lot of new technologies in the training."`}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TrainingExperienceSwiperSlide
            name='Angelo'
            Position='Mid Software Developer'
            experience='"Very useful, the objectives of training was clear and prepared me to be effective when I joined the dev team. Trainers are knowledgeable about the training topics and was well prepared. What I like the most about the training is that trainers will not see your work as amiss instead they will give suggestions that will improve you and the outcome of your project/task."'
          />
        </SwiperSlide>

        <SwiperSlide>
          <TrainingExperienceSwiperSlide
            name='Prince'
            Position='Jr. Software Developer'
            experience={`"In my side, really love the people I've been working on in this company. Task maybe hard sometimes, but I always find those people behind and cheering up <3. Training is not a disadvantage but opportunity to learn."`}
          />
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
