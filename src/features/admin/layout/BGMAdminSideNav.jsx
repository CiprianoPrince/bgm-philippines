import React, { memo } from "react"
import { createPortal } from "react-dom"
import { Link, NavLink } from "react-router-dom"
import { Nav } from "reactstrap"
import styled from "styled-components"
import BGMStack from "../../../components/ui/BGMStack"
import { BiArrowFromLeft, BiSolidDashboard, BiX } from "react-icons/bi"
import {
  closeAdminSideNav,
  toggleAdminSideNav,
  useAdminSideNavContext,
  useAdminSideNavDispatchContext,
} from "../context/AdminSideNavContext"

import { useEventListener } from "../../../hooks"

const BGMAdminSideNav = memo(() => {
  const isAdminSideNavShown = useAdminSideNavContext()
  const dispatch = useAdminSideNavDispatchContext()

  useEventListener("scroll", () => dispatch(closeAdminSideNav()))

  return createPortal(
    <AdminSideNavStyled
      isAdminSideNavShown={isAdminSideNavShown}
      className='shadow rounded-2 z-2'
    >
      <NavStyled
        className='bg-dark gap-3 border border-0 rounded-4 py-3 px-4 '
        vertical
      >
        <BGMStack direction='horizontal'>
          <Link to='/' className='me-auto'>
            <p className='text-light m-0  fw-bold'>PGM Phillipines</p>
          </Link>

          {isAdminSideNavShown ? (
            <BiXStyled
              role='button'
              className='text-light fw-bold'
              onClick={() => dispatch(toggleAdminSideNav())}
            />
          ) : (
            <BiArrowFromLeftStyled
              role='button'
              className='text-light bg-dark'
              onClick={() => dispatch(toggleAdminSideNav())}
            />
          )}
        </BGMStack>

        <NavLinkStyled
          onClick={() => dispatch(toggleAdminSideNav())}
          className='bgm-fs-0 border border-0 rounded-4'
          to='/admin/employees'
        >
          Employees
        </NavLinkStyled>

        <NavLinkStyled
          onClick={() => dispatch(toggleAdminSideNav())}
          className='bgm-fs-0 border border-0 rounded-4'
          to='/admin/jobs'
        >
          Available Jobs
        </NavLinkStyled>

        <NavLinkStyled
          onClick={() => dispatch(toggleAdminSideNav())}
          className='bgm-fs-0 border border-0 rounded-4'
          to='/admin/services'
        >
          Services
        </NavLinkStyled>

        <NavLinkStyled
          onClick={() => dispatch(toggleAdminSideNav())}
          className='bgm-fs-0 border border-0 rounded-4'
          to='/admin/technologies'
        >
          Technology
        </NavLinkStyled>

        <NavLinkStyled
          onClick={() => dispatch(toggleAdminSideNav())}
          className='bgm-fs-0 border border-0 rounded-4'
          to='/admin/workArrangements'
        >
          Work Arrangement
        </NavLinkStyled>

        <NavLinkStyled
          onClick={() => dispatch(toggleAdminSideNav())}
          className='bgm-fs-0 border border-0 rounded-4'
          to='/admin/messages'
        >
          Messages
        </NavLinkStyled>
      </NavStyled>
    </AdminSideNavStyled>,
    document.getElementById("admin-sidenav")
  )
})

export default BGMAdminSideNav

const AdminSideNavStyled = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  width: min(20rem, 80vw);
  height: 90%;
  margin-top: 1rem;
  z-index: 3000;
  transition: all 0.5s ease-in-out;
  translate: ${({ isAdminSideNavShown }) =>
      isAdminSideNavShown === true ? "5%" : "-100%"}
    0;
`

const NavStyled = styled(Nav)`
  height: 100%;
`

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 0.75rem 1rem;
  color: var(--bs-light);
  background-color: rgb(0, 194, 168);

  &:hover {
    background-color: rgb(0, 194, 168, 0.75);
  }
`

const BiXStyled = styled(BiX)`
  font-size: 45px;
  transition: all 125ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

const BiArrowFromLeftStyled = styled(BiArrowFromLeft)`
  translate: 80px 0;
  font-size: 45px;
  transition: all 125ms ease-in-out;
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
  }
`
