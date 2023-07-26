import React, { memo } from "react"
import { BiEnvelope } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import styled from "styled-components"
import BGMNavLink from "../../components/ui/BGMNavLink"

const BGMNavLinkList = () => {
  return (
    <NavStyled className='align-items-center gap-3' horizontal='end'>
      <BGMNavLink to='/'>Home</BGMNavLink>

      <BGMNavLink to='/services'>Services</BGMNavLink>

      <BGMNavLink to='/careers'>Careers</BGMNavLink>

      <BGMNavLink to='/about'>About us</BGMNavLink>

      <NavItem className='bg-light'>
        <NavLinkStyled className='fw-bold nav-link' to='/contact'>
          <BiEnvelope className='bg-transparent fs-2 d-block m-auto' />
          Inquiry
        </NavLinkStyled>
      </NavItem>
    </NavStyled>
  )
}

export default BGMNavLinkList

const NavStyled = styled(Nav)`
  display: none !important;
  @media only screen and (min-width: 768px) {
    display: flex !important;
  }
`
const NavLinkStyled = styled(NavLink)`
  &:hover {
    color: var(--bs-light);
    background-color: hsl(172, 100%, 38%, 0.4);
  }

  &.active {
    color: var(--bs-light);
    background-color: hsl(172, 100%, 38%, 0.4);
  }
`