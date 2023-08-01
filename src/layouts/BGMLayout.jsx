import React from "react"

import SideNavProvider from "../context/SideNavContext"
import AuthorizationProvider from "../context/AuthorizationContext"

import BGMFooter from "./BGMFooter"
import BGMHeader from "./BGMHeader"
import BGMMain from "./BGMMain"

import { Outlet } from "react-router-dom"

const BGMLayout = () => {
  return (
    <>
      <AuthorizationProvider>
        <SideNavProvider>
          <BGMHeader />
        </SideNavProvider>
        <BGMMain>
          <Outlet />
        </BGMMain>
        <BGMFooter />
      </AuthorizationProvider>
    </>
  )
}

export default BGMLayout
