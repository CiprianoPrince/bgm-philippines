import React from "react"
import { Container } from "reactstrap"
import MeetTheTeamTitle from "./MeetTheTeamTitle"
import MeetTheTeamImages from "./MeetTheTeamImages"

const MeetTheTeamContainer = () => {
  return (
    <Container tag='section' id='BGMTEAM' className='my-5 p-5 '>
      <MeetTheTeamTitle />
      <MeetTheTeamImages />
    </Container>
  )
}

export default MeetTheTeamContainer
