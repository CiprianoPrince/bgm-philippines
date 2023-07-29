import React from "react"
import { createPortal } from "react-dom"
import { Link, NavLink } from "react-router-dom"
import { Nav } from "reactstrap"
import styled from "styled-components"
import BGMStack from "../../../components/ui/BGMStack"
import { BiArrowFromLeft, BiSolidDashboard, BiX } from "react-icons/bi"
import {
  toggleadminSideNav,
  useAdminSideNavContext,
  useAdminSideNavDispatchContext,
} from "../context/AdminSideNavContext"

const BGMAdminSideNav = () => {
  const isAdminSideNavShown = useAdminSideNavContext()
  const dispatch = useAdminSideNavDispatchContext()

  console.log(isAdminSideNavShown)

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
            <BiArrowFromLeftStyled
              role='button'
              className='text-light bg-dark'
              onClick={() => dispatch(toggleadminSideNav())}
            />
          ) : (
            <BiXStyled
              role='button'
              className='text-light fw-bold'
              onClick={() => dispatch(toggleadminSideNav())}
            />
          )}
        </BGMStack>

        <NavLinkStyled
          className='bgm-fs-0 border border-0 rounded-4'
          to='/admin'
        >
          <BiSolidDashboard className='d-inline-block' /> Dashboard
        </NavLinkStyled>

        <NavLinkStyled
          className='bgm-fs-0 border border-0 rounded-4'
          to='/admin'
        >
          <BiSolidDashboard className='d-inline-block' /> Dashboard
        </NavLinkStyled>
      </NavStyled>
    </AdminSideNavStyled>,
    document.getElementById("admin-sidenav")
  )
}

export default BGMAdminSideNav

const AdminSideNavStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: min(20rem, 80vw);
  height: 97%;
  margin-top: 1rem;
  z-index: 3000;
  transition: all 0.5s ease-in-out;
  translate: ${({ isAdminSideNavShown }) =>
      isAdminSideNavShown === false ? "5%" : "-100%"}
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
