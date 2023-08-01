import React from "react"
import { Col, Row } from "reactstrap"
import ContainerWithImgStyled from "../styled/ContainerStyled"
import { bgmGreenWaveSvg } from "../../assets"
import HeroTitle from "./HeroTitle"
import HeroButton from "./HeroButton"
import HeroImage from "./HeroImage"

const HeroContainer = () => {
  return (
    <>
      <ContainerWithImgStyled
        bgImage={bgmGreenWaveSvg}
        tag='section'
        fluid='true'
      >
        <Row className='vh-100 flex-sm-row-reverse align-items-center align-content-center m-0'>
          <Col xs={12} sm={6} className='p-3'>
            <HeroTitle />
            <HeroButton />
          </Col>

          <Col xs={12} sm={6} className='text-center mt-5 mt-sm-0'>
            <HeroImage />
          </Col>
        </Row>
      </ContainerWithImgStyled>
    </>
  )
}

export default HeroContainer
