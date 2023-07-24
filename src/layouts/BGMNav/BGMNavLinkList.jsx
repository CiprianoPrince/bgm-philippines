import React, { memo } from "react"
import { BiEnvelope } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import styled from "styled-components"
import BGMNavLink from "../../components/ui/BGMNavLink"

const BGMNavLinkList = memo(() => {
  return (
    <NavStyled className='align-items-center gap-3' horizontal='end'>
      <BGMNavLink to='/'>Home</BGMNavLink>

      <BGMNavLink to='/services'>Services</BGMNavLink>

      <BGMNavLink to='/careers'>Careers</BGMNavLink>

      <BGMNavLink to='/about'>About us</BGMNavLink>

      <NavItem className='bg-light'>
        <NavLink className='fw-bold nav-link text-success' to='/contact'>
          <BiEnvelope className='d-block m-auto fs-2 text-success' />
          Inquiry
        </NavLink>
      </NavItem>
    </NavStyled>
  )
})

export default BGMNavLinkList

const NavStyled = styled(Nav)`
  display: none !important;
  @media only screen and (min-width: 768px) {
    display: flex !important;
  }
`
