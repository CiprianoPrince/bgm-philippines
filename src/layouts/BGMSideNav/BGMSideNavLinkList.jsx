import React, { memo } from "react"
import { Nav } from "reactstrap"
import BGMSideNavButton from "./BGMSideNavButton"
import {
  toggleSideNav,
  useSideNavDispatchContext,
} from "../../context/SideNavContext"
import BGMSideNavLink from "../../components/ui/BGMSideNavLink"

const BGMSideNavLinkList = memo(() => {
  const dispatch = useSideNavDispatchContext()
  return (
    <>
      <Nav
        className='bg-primary bg-opacity-75 text-center vh-100 gap-2'
        vertical
      >
        <BGMSideNavButton />

        <BGMSideNavLink to='/' callback={() => dispatch(toggleSideNav())}>
          Home
        </BGMSideNavLink>

        <BGMSideNavLink
          to='/services'
          callback={() => dispatch(toggleSideNav())}
        >
          Services
        </BGMSideNavLink>

        <BGMSideNavLink
          to='/careers'
          callback={() => dispatch(toggleSideNav())}
        >
          Careers
        </BGMSideNavLink>

        <BGMSideNavLink to='/about' callback={() => dispatch(toggleSideNav())}>
          About us
        </BGMSideNavLink>

        <BGMSideNavLink
          to='/contact'
          callback={() => dispatch(toggleSideNav())}
        >
          Contact us
        </BGMSideNavLink>
      </Nav>
    </>
  )
})

export default BGMSideNavLinkList
