import React from "react"
import HeaderImgDivStyled from "../../../components/ui/BGMHeaderImgDivStyled"
import { Container } from "reactstrap"
import { careersHeaderImgJpg } from "../assets"

const CareersHeader = () => {
  return (
    <>
      <HeaderImgDivStyled headerimg={careersHeaderImgJpg}>
        <Container className='z-1'>
          <h1 className='bgm-fs-5 fw-medium text-light'>Careers</h1>
        </Container>
      </HeaderImgDivStyled>
    </>
  )
}

export default CareersHeader
