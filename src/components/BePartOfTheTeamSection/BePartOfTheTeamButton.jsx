import React from "react"
import HashLinkStyled from "../ui/HashLinkStyled"
const BePartOfTheTeamButton = () => {
  return (
    <>
      <HashLinkStyled
        to='/careers#JobOpening'
        className='btn fw-bold'
        color='secondary'
        outline
      >
        Explore Job Opportunities
      </HashLinkStyled>
    </>
  )
}

export default BePartOfTheTeamButton
