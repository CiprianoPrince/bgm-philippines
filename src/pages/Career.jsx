import React from "react"
import HeaderImgDivStyled from "../components/ui/BGMHeaderImgDivStyled"
import { Container } from "reactstrap"
import { careersHeaderImgJpg } from "../assets";

function Career() {
  document.title = "BGM Phillipines Inc. | Careers"
  return (
    <Container fluid tag='section' className='p-0 mt-5'>
      <HeaderImgDivStyled headerimg={careersHeaderImgJpg}>
        <Container className='z-1'>
          <h1 className='bgm-fs-5 fw-medium text-light'>Careers</h1>
        </Container>
      </HeaderImgDivStyled>
    </Container>
  )
}

export default Career
