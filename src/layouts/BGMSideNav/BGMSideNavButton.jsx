import React from "react"
import { useSetSideNav, useSideNav } from "../../context/SideNavContext"
import { Button, NavItem } from "reactstrap"
import { BiX } from "react-icons/bi"

const BGMSideNavButton = () => {
  const isSideNavShown = useSideNav()
  const setIsSideNavShown = useSetSideNav()

  console.log("BGMSideNavButton")

  return (
    <NavItem className='d-flex'>
      <Button
        className='border-0 ms-auto p-4 bg-transparent'
        onClick={() => setIsSideNavShown(!isSideNavShown)}
      >
        <BiX className='text-light  fs-1' />
      </Button>
    </NavItem>
  )
}

export default BGMSideNavButton
