import React from "react"
import { Col, Container, Row } from "reactstrap"
import BePartOfTheTeamImage from "./BePartOfTheTeamImage"
import BePartOfTheTeamTitle from "./BePartOfTheTeamTitle"
import BePartOfTheTeamButton from "./BePartOfTheTeamButton"

const BePartOfTheTeamContainer = () => {
  return (
    <>
      <Container tag='section' className='py-5'>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} lg={6} className='p-3'>
            <BePartOfTheTeamImage />
          </Col>

          <Col
            xs={12}
            lg={6}
            className='d-flex flex-column justify-content-center align-items-center p-3'
          >
            <BePartOfTheTeamTitle />
            <BePartOfTheTeamButton />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BePartOfTheTeamContainer
