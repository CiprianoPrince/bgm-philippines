import React from "react"
import { Container } from "reactstrap"

import { trainingExperienceJpg } from "../../assets"
import HeaderImgDivStyled from "../../../../components/ui/BGMHeaderImgDivStyled"

import TrainingExperienceTitle from "./TrainingExperienceTitle"
import TrainingExperienceSwiper from "./TrainingExperienceSwiper"

//

const TrainingExperienceContainer = () => {
  return (
    <>
      <HeaderImgDivStyled
        fluid
        afterbgcolor='dark'
        headerimg={trainingExperienceJpg}
        tag='section'
        className='py-5 my-5 bg-primary'
      >
        <Container className='text-center z-1'>
          <TrainingExperienceTitle />
          <TrainingExperienceSwiper />
        </Container>
      </HeaderImgDivStyled>
    </>
  )
}

export default TrainingExperienceContainer
