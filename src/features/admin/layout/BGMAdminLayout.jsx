import React from "react"
import AdminSideNavContext from "../context/AdminSideNavContext"
import { Outlet } from "react-router-dom"

const BGMAdminLayout = () => {
  return (
    <AdminSideNavContext>
      <Outlet />
    </AdminSideNavContext>
  )
}

export default BGMAdminLayout
