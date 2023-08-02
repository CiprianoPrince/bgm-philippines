import React, { createContext, useContext, useReducer } from "react"
import { RESOURCE } from "../data/constants"
import fetchResource from "../services/fetchResource"
import resourceReducer from "../helper/resourceReducer"

const workArrangementsContext = createContext()
const workArrangementsDispatchContext = createContext()

export const useWorkArrangementsContext = () =>
  useContext(workArrangementsContext)
export const useWorkArrangementsDispatchContext = () =>
  useContext(workArrangementsDispatchContext)

const WorkArrangementsContext = ({ children }) => {
  const [State, Dispatch] = useReducer(
    resourceReducer,
    fetchResource(RESOURCE.workArrangements)
  )

  return (
    <workArrangementsContext.Provider value={State}>
      <workArrangementsDispatchContext.Provider value={Dispatch}>
        {children}
      </workArrangementsDispatchContext.Provider>
    </workArrangementsContext.Provider>
  )
}

export default WorkArrangementsContext
