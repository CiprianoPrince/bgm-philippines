import { memo } from "react"
import { createPortal } from "react-dom"

import styled from "styled-components"

import { useSideNavContext } from "../../context/SideNavContext"
import BGMSideNavLinkList from "./BGMSideNavLinkList"

const BGMSideNav = memo(() => {
  const isSideNavShown = useSideNavContext()

  return createPortal(
    <SideNav $isShown={isSideNavShown}>
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
