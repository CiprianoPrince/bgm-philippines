import React from "react"
import { NavLink } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { pgmLogoPng } from "../../assets";

const BGMLogo = () => {
  const navigate = useNavigate()

  return (
    <NavLink onClick={() => navigate("/")} className='me-auto'>
      <img className='p-3' src={pgmLogoPng} alt='PGMlogo' />
    </NavLink>
  )
}

export default BGMLogo
