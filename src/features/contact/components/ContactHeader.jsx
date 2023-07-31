import React from "react"
import { contactUsHeaderImgJpg } from "../assets"
import { Container } from "reactstrap"
import HeaderImgDivStyled from "../../../components/ui/BGMHeaderImgDivStyled"

const ContactHeader = () => {
  return (
    <>
      <HeaderImgDivStyled headerimg={contactUsHeaderImgJpg}>
        <Container className='z-1'>
          <h1 className='bgm-fs-5 fw-medium text-light'>Contact us</h1>
        </Container>
      </HeaderImgDivStyled>
    </>
  )
}

export default ContactHeader
