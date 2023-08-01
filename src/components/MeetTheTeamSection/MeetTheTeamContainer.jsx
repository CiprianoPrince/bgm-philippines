import React from "react"
import { Col, Container, Row } from "reactstrap"
import MeetTheTeamImage from "./MeetTheTeamImage"
import MeetTheTeamTitle from "./MeetTheTeamTitle"
import MeetTheTeamButton from "./MeetTheTeamButton"

const MeetTheTeamContainer = () => {
  return (
    <>
      <Container tag='section' className='py-5'>
        <Row className='flex-row-reverse'>
          <Col xs={12} lg={6} className='p-3'>
            <MeetTheTeamImage />
          </Col>

          <Col xs={12} lg={6} className='p-3'>
            <MeetTheTeamTitle />
            <MeetTheTeamButton />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MeetTheTeamContainer
