import React from "react"
import HeaderImgDivStyled from "../../../components/ui/BGMHeaderImgDivStyled"
import { Container } from "reactstrap"
import { aboutUsHeaderImg } from "../assets"

const AboutHeader = () => {
  return (
    <>
      <HeaderImgDivStyled headerimg={aboutUsHeaderImg}>
        <Container className='z-1'>
          <h1 className='bgm-fs-5 fw-medium text-light'>About us</h1>
        </Container>
      </HeaderImgDivStyled>
    </>
  )
}

export default AboutHeader
