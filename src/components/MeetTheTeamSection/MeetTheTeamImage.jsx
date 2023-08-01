import React from "react"
import MeetTheTeamCard from "./MeetTheTeamCard"
import { dasallaWebp, royceWebp } from "../../assets"
import { Col, Row } from "reactstrap"

const MeetTheTeamImage = () => {
  return (
    <>
      <Row direction='horizontal' gap={3}>
        <Col xs={12} md={6} className="mb-3">
          <MeetTheTeamCard
            cardImage={royceWebp}
            name='Royce Tecson'
            position='President'
            color='white'
            textColor='dark'
            borderColor='primary'
          />
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <MeetTheTeamCard
            name='Aveunalliv Dasalla'
            position='Director'
            cardImage={dasallaWebp}
            color='primary'
            textColor='white'
            borderColor='white'
          />
        </Col>
      </Row>
    </>
  )
}

export default MeetTheTeamImage
