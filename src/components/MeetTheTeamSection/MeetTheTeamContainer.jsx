import React from "react"
import { Col, Container, Row } from "reactstrap"
import MeetTheTeamImage from "./MeetTheTeamImage"
import MeetTheTeamTitle from "./MeetTheTeamTitle"
import MeetTheTeamButton from "./MeetTheTeamButton"
import styled from "styled-components"

const MeetTheTeamContainer = () => {
  return (
    <>
      <Container tag='section' className='py-5'>
        <Row className='flex-row-reverse'>
          <Col xs={12} lg={6} className='p-3'>
            <MeetTheTeamImage />
          </Col>

          <Col
            xs={12}
            lg={6}
            className='d-flex flex-column justify-content-center align-items-center p-3'
          >
            <DivStyled>
              <MeetTheTeamTitle />
              <MeetTheTeamButton />
            </DivStyled>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MeetTheTeamContainer

const DivStyled = styled.div`
  width: min(30rem, 100%);
`
