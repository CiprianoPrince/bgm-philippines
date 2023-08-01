import React from "react"
import LinkStyled from "../ui/LinkStyled"

const MeetTheTeamButton = () => {
  return (
    <>
      <LinkStyled to='about#the_team' className="btn" color='primary' outline>
        Meet our Team
      </LinkStyled>
    </>
  )
}

export default MeetTheTeamButton
