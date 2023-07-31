import React from "react"
import HeaderImgDivStyled from "../components/ui/BGMHeaderImgDivStyled"
import { Container } from "reactstrap"
import { aboutUsHeaderImgJpg } from "../assets"

function About() {
  document.title = "BGM Phillipines Inc. | Admin panel"
  return (
    <Container fluid tag='section' className='p-0 mt-5'>
      <HeaderImgDivStyled headerimg={aboutUsHeaderImgJpg}>
        <Container className='z-1'>
          <h1 className='bgm-fs-5 fw-medium text-light'>About us</h1>
        </Container>
      </HeaderImgDivStyled>
    </Container>
  )
}

export default About
