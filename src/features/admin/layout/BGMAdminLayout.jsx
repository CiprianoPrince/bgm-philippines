import React from "react"
import AdminSideNavContext from "../context/AdminSideNavContext"
import { Outlet } from "react-router-dom"
import UserProvider from "../context/UserContext"

const BGMAdminLayout = () => {
  return (
    <UserProvider>
      <AdminSideNavContext>
        <Outlet />
      </AdminSideNavContext>
    </UserProvider>
  )
}

export default BGMAdminLayout
