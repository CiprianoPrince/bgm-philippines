import React from "react"
import { Col, Container, Row } from "reactstrap"
import BePartOfTheTeamImage from "./BePartOfTheTeamImage"
import BePartOfTheTeamTitle from "./BePartOfTheTeamTitle"
import BePartOfTheTeamButton from "./BePartOfTheTeamButton"
import styled from "styled-components"

const BePartOfTheTeamContainer = () => {
  return (
    <>
      <Container tag='section' className='py-5'>
        <Row className='justify-content-center align-items-center'>
          <ColStyled xs={12} lg={6} className='p-3'>
            <BePartOfTheTeamImage />
          </ColStyled>

          <Col
            xs={12}
            lg={6}
            className='d-flex flex-column justify-content-center align-items-center p-3'
          >
            <DivStyled>
              <BePartOfTheTeamTitle />
              <BePartOfTheTeamButton />
            </DivStyled>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BePartOfTheTeamContainer

const DivStyled = styled.div`
  width: min(30rem, 100%);
`

const ColStyled = styled(Col)`
  width: 35rem;
`
