import React, { memo } from "react"
import {
  toggleSideNav,
  useSideNavDispatchContext,
} from "../../context/SideNavContext"
import { Button, NavItem } from "reactstrap"
import { BiX } from "react-icons/bi"

const BGMSideNavButton = memo(() => {
  const dispatch = useSideNavDispatchContext()

  return (
    <NavItem className='d-flex'>
      <Button
        className='border-0 ms-auto p-4 bg-transparent'
        onClick={() => dispatch(toggleSideNav())}
      >
        <BiX className='text-light fs-1' />
      </Button>
    </NavItem>
  )
})

export default BGMSideNavButton
