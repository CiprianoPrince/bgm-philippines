import React from "react"
import LinkStyled from "../ui/LinkStyled"

const MeetTheTeamButton = () => {
  return (
    <>
      <LinkStyled to='/about#BGMTEAM' className='btn' color='secondary' outline>
        Meet our Team
      </LinkStyled>
    </>
  )
}

export default MeetTheTeamButton
