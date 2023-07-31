import React from "react"
import { Container } from "reactstrap"
import HeaderImgDivStyled from "../components/ui/BGMHeaderImgDivStyled"
import { servicesHeaderImgJpg } from "../assets"

function Service() {
  document.title = "BGM Phillipines Inc. | Services"
  return (
    <>
      <Container fluid tag='section' className='p-0 mt-5'>
        <HeaderImgDivStyled headerimg={servicesHeaderImgJpg}>
          <Container className='z-1'>
            <h1 className='bgm-fs-5 fw-medium text-light'>Services</h1>
          </Container>
        </HeaderImgDivStyled>
      </Container>
    </>
  )
}

export default Service
