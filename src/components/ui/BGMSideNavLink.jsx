import React, { memo } from "react"
import { NavItem } from "reactstrap"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const BGMSideNavLink = memo(
  ({ children, to, className, callback = () => {} }) => {
    return (
      <>
        <NavItem>
          <NavLinkStyled
            className={`nav-link text-light fw-medium bgm-fs-2 ${className}`}
            to={to}
            onClick={callback}
          >
            {children}
          </NavLinkStyled>
        </NavItem>
      </>
    )
  }
)

export default BGMSideNavLink

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
    width: 39%;
    left: 30%;
  }

  &.active:after {
    width: 39%;
    left: 30%;
  }
`
