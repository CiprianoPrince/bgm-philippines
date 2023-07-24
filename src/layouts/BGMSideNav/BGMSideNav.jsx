import { memo } from "react"
import { createPortal } from "react-dom"

import styled from "styled-components"

import { useSideNav } from "../../context/SideNavContext"
import BGMSideNavLinkList from "./BGMSideNavLinkList"

const BGMSideNav = memo(() => {
  const isSideNavShown = useSideNav()

  console.log("BGMSideNav")

  return createPortal(
    <SideNav className='bg-dark bg-opacity-75' $isShown={isSideNavShown}>
      <BGMSideNavLinkList />
    </SideNav>,
    document.getElementById("portal")
  )
})

const SideNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  translate: ${({ $isShown }) => ($isShown ? "0" : "100%")} 0;
  transition: translate 500ms ease-in-out;
`

export default BGMSideNav
