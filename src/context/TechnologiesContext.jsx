import React, { createContext, useContext, useReducer } from "react"
import { RESOURCE } from "../data/constants"
import fetchResource from "../services/fetchResource"
import resourceReducer from "../helper/resourceReducer"

const technologiesContext = createContext()
const technologiesDispatchContext = createContext()

export const useTechnologiesContext = () => useContext(technologiesContext)
export const useTechnologiesDispatchContext = () => useContext(technologiesDispatchContext)

const TechnologiesContext = ({ children }) => {
  const [State, Dispatch] = useReducer(
    resourceReducer,
    fetchResource(RESOURCE.technologies)
  )

  return (
    <technologiesContext.Provider value={State}>
      <technologiesDispatchContext.Provider value={Dispatch}>
        {children}
      </technologiesDispatchContext.Provider>
    </technologiesContext.Provider>
  )
}

export default TechnologiesContext
