import React, { createContext, useContext, useReducer } from "react"
import { RESOURCE } from "../data/constants"
import fetchResource from "../services/fetchResource"
import resourceReducer from "../helper/resourceReducer"

const employeesContext = createContext()
const employeesDispatchContext = createContext()

export const useEmployeesContext = () => useContext(employeesContext)
export const useEmployeesDispatchContext = () =>
  useContext(employeesDispatchContext)

const EmployeesContext = ({ children }) => {
  const [State, Dispatch] = useReducer(
    resourceReducer,
    fetchResource(RESOURCE.employees)
  )

  return (
    <employeesContext.Provider value={State}>
      <employeesDispatchContext.Provider value={Dispatch}>
        {children}
      </employeesDispatchContext.Provider>
    </employeesContext.Provider>
  )
}

export default EmployeesContext
