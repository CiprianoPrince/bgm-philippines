import React, { createContext, useContext, useReducer } from "react"
import { RESOURCE } from "../data/constants"
import fetchResource from "../services/fetchResource"
import resourceReducer from "../helper/resourceReducer"

const servicesContext = createContext()
const servicesDispatchContext = createContext()

export const useServicesContext = () => useContext(servicesContext)
export const useServicesDispatchContext = () => useContext(servicesDispatchContext)

const ServicesContext = ({ children }) => {
  const [State, Dispatch] = useReducer(
    resourceReducer,
    fetchResource(RESOURCE.services)
  )

  return (
    <servicesContext.Provider value={State}>
      <servicesDispatchContext.Provider value={Dispatch}>
        {children}
      </servicesDispatchContext.Provider>
    </servicesContext.Provider>
  )
}

export default ServicesContext
