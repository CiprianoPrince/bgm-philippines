import React, { memo } from "react"
import { BiMenu } from "react-icons/bi"
import styled from "styled-components"
import { useSetSideNav } from "../../context/SideNavContext"

const BGMNavButton = memo(() => {
  const setIsSideNavShown = useSetSideNav()
  return (
    <>
      <BiMenuSyled
        className='fs-1 text-success'
        onClick={() => setIsSideNavShown(true)}
      />
    </>
  )
})

export default BGMNavButton

const BiMenuSyled = styled(BiMenu)`
  @media only screen and (min-width: 768px) {
    display: none !important;
  }
`
