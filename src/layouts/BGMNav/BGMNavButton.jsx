import React, { memo } from "react"
import { BiMenu } from "react-icons/bi"
import styled from "styled-components"
import {
  toggleSideNav,
  useSideNavDispatchContext,
} from "../../context/SideNavContext"

const BGMNavButton = () => {
  const dispatch = useSideNavDispatchContext()
  return (
    <>
      <BiMenuSyled
        className='fs-1 text-primary'
        onClick={() => dispatch(toggleSideNav())}
      />
    </>
  )
}

export default BGMNavButton

const BiMenuSyled = styled(BiMenu)`
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none !important;
  }
`
