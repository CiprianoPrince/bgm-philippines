import React from "react"
import { Col, Container, Row } from "reactstrap"
import DevelopmentProcessTitle from "./DevelopmentProcessTitle"
import DevelopmentProcessText from "./DevelopmentProcessText"
import DevelopmentProcessImage from "./DevelopmentProcessImage"

const DevelopmentProcessContainer = () => {
  return (
    <>
      <Container tag='section' className='bg p-5'>
        <DevelopmentProcessTitle />
        <Row>
          <Col xs={12} lg={6} className='mb-3'>
            <DevelopmentProcessImage />
          </Col>

          <Col xs={12} lg={6} className='mb-3'>
            <DevelopmentProcessText />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DevelopmentProcessContainer
