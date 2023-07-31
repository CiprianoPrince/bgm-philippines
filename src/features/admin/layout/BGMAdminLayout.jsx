import React from "react"
import AdminSideNavContext from "../context/AdminSideNavContext"
import { Outlet } from "react-router-dom"
import EmployeesContext from "../../../context/EmployeesContext"
import AdminProvider from "../context/AdminContext"

const BGMAdminLayout = () => {
  return (
    <AdminProvider>
      <EmployeesContext>
        <AdminSideNavContext>
          <Outlet />
        </AdminSideNavContext>
      </EmployeesContext>
    </AdminProvider>
  )
}

export default BGMAdminLayout
