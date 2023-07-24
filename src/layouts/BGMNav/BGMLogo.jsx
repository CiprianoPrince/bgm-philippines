import React from "react"
import { NavLink } from "reactstrap"
import { useNavigate } from "react-router-dom"
import PGMlogo from "../../assets/PGM.png"

const BGMLogo = () => {
  const navigate = useNavigate()

  return (
    
      <NavLink onClick={() => navigate("/")} className='me-auto'>
        <img className='p-3' src={PGMlogo} alt='PGMlogo' />
      </NavLink>
    
  )
}

export default BGMLogo
