import React, { memo } from "react"
import { Nav } from "reactstrap"
import BGMSideNavButton from "./BGMSideNavButton"
import BGMNavLink from "../../components/ui/BGMNavLink"
import { useSetSideNav } from "../../context/SideNavContext"

const BGMSideNavLinkList = memo(() => {
  const setIsSideNavShown = useSetSideNav()
  console.log("BGMSideNavLinkList")
  return (
    <>
      <Nav className='bg-success text-center vh-100 gap-2' vertical>
        <BGMSideNavButton />

        <BGMNavLink to='/' callback={() => setIsSideNavShown(false)}>
          Home
        </BGMNavLink>

        <BGMNavLink to='/services' callback={() => setIsSideNavShown(false)}>
          Services
        </BGMNavLink>

        <BGMNavLink to='/careers' callback={() => setIsSideNavShown(false)}>
          Careers
        </BGMNavLink>

        <BGMNavLink to='/about' callback={() => setIsSideNavShown(false)}>
          About us
        </BGMNavLink>

        <BGMNavLink to='/contact' callback={() => setIsSideNavShown(false)}>
          Contact us
        </BGMNavLink>
      </Nav>
    </>
  )
})

export default BGMSideNavLinkList
