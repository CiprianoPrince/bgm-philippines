import React from "react"
import HeaderImgDivStyled from "../../../components/ui/BGMHeaderImgDivStyled"
import { Container } from "reactstrap"
import { servicesHeaderImgJpg } from "../assets"

const ServicesHeader = () => {
  return (
    <>
      <HeaderImgDivStyled headerimg={servicesHeaderImgJpg}>
        <Container className='z-1'>
          <h1 className='bgm-fs-5 fw-medium text-light'>Services</h1>
        </Container>
      </HeaderImgDivStyled>
    </>
  )
}

export default ServicesHeader
