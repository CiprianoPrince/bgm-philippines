import React from "react"
import { Outlet } from "react-router-dom"
import BGMFooter from "./BGMFooter"
import BGMHeader from "./BGMHeader"
import BGMMain from "./BGMMain"
import SideNavProvider from "../context/SideNavContext"
import AuthProvider from "../context/AuthContext"

const BGMLayout = () => {
  return (
    <>
      <AuthProvider>
        <SideNavProvider>
          <BGMHeader />
        </SideNavProvider>
        <BGMMain>
          <Outlet />
        </BGMMain>
        <BGMFooter />
      </AuthProvider>
    </>
  )
}

export default BGMLayout
