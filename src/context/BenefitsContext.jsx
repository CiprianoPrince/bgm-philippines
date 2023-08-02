import React, { createContext, useContext, useReducer } from "react"
import { RESOURCE } from "../data/constants"
import fetchResource from "../services/fetchResource"
import resourceReducer from "../helper/resourceReducer"

const benefitsContext = createContext()
const benefitsDispatchContext = createContext()

export const useBenefitsContext = () => useContext(benefitsContext)
export const useBenefitsDispatchContext = () => useContext(benefitsDispatchContext)

const BenefitsContext = ({ children }) => {
  const [State, Dispatch] = useReducer(
    resourceReducer,
    fetchResource(RESOURCE.benefits)
  )

  return (
    <benefitsContext.Provider value={State}>
      <benefitsDispatchContext.Provider value={Dispatch}>
        {children}
      </benefitsDispatchContext.Provider>
    </benefitsContext.Provider>
  )
}

export default BenefitsContext
