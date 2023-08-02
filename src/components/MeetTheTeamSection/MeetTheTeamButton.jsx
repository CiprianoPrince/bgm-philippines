import React from "react"
import HashLinkStyled from "../ui/HashLinkStyled"

const MeetTheTeamButton = () => {
  return (
    <>
      <HashLinkStyled
        to='/about#BGMTEAM'
        className='btn'
        color='secondary'
        outline
      >
        Meet our Team
      </HashLinkStyled>
    </>
  )
}

export default MeetTheTeamButton
