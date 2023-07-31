import React from "react"

import { Col, Container, Row } from "reactstrap"
import ContainerWithImgStyled from "../styled/ContainerStyled"
import { bgmWhiteWaveSvg } from "../../assets"
import AboutusText from "./AboutusText"
import AboutusImages from "./AboutusImages"


const AboutusContainer = () => {
  return (
    <>
      <ContainerWithImgStyled
        bgImage={bgmWhiteWaveSvg}
        tag='section'
        fluid='true'
        className='bg-primary py-5'
      >
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} sm={6} className="p-3">
              <AboutusText />
            </Col>

            <Col xs={12} sm={6} className="p-3">
              <AboutusImages />
            </Col>
          </Row>
        </Container>
      </ContainerWithImgStyled>
    </>
  )
}

export default AboutusContainer
