import React from "react"
import AdminSideNavContext from "../context/AdminSideNavContext"
import { Outlet } from "react-router-dom"
import EmployeesContext from "../../../context/EmployeesContext"
import AdminProvider from "../context/AdminContext"
import JobsContext from "../../../context/JobsContext"
import MessagesContext from "../../../context/MessagesContext"
import ServicesContext from "../../../context/ServicesContext"
import TechnologiesContext from "../../../context/TechnologiesContext"
import BenefitsContext from "../../../context/BenefitsContext"
import WorkArrangementsContext from "../../../context/WorkArrangementsContext"

const BGMAdminLayout = () => {
  return (
    <AdminProvider>
      <EmployeesContext>
        <BenefitsContext>
          <JobsContext>
            <ServicesContext>
              <TechnologiesContext>
                <WorkArrangementsContext>
                  <MessagesContext>
                    <AdminSideNavContext>
                      <Outlet />
                    </AdminSideNavContext>
                  </MessagesContext>
                </WorkArrangementsContext>
              </TechnologiesContext>
            </ServicesContext>
          </JobsContext>
        </BenefitsContext>
      </EmployeesContext>
    </AdminProvider>
  )
}

export default BGMAdminLayout
