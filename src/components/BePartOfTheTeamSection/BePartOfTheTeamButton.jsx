import React from "react"
import LinkStyled from "../ui/LinkStyled"
import { Link } from "react-router-dom"

const BePartOfTheTeamButton = () => {
  return (
    <>
      <LinkStyled className="btn" color='secondary' outline>
        Explore Job Opportunities
      </LinkStyled>
    </>
  )
}

export default BePartOfTheTeamButton
