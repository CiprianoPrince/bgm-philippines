import React, { memo } from "react"
import { NavItem } from "reactstrap"
import styled from "styled-components"
import { useSetSideNav } from "../../context/SideNavContext"
import { NavLink } from "react-router-dom"

const BGMNavLink = memo(
  ({
    children,
    to,
    className = "nav-link text-light fw-bold",
    callback = () => {},
  }) => {
    return (
      <>
        <NavItem>
          <NavLinkStyled className={className} to={to} onClick={callback}>
            {children}
          </NavLinkStyled>
        </NavItem>
      </>
    )
  }
)

export default BGMNavLink

const NavLinkStyled = styled(NavLink)`
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    left: 50%;
    bottom: 0;
    position: absolute;
    background: hsl(140, 20%, 91%);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    -moz-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    -ms-transition: width 0.3s ease 0s, left 0.3s ease 0s;
    -o-transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  &.active:after {
    width: 100%;
    left: 0;
  }
`
