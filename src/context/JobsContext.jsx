import React, { createContext, useContext, useReducer } from "react"
import { RESOURCE } from "../data/constants"
import fetchResource from "../services/fetchResource"
import resourceReducer from "../helper/resourceReducer"

const jobsContext = createContext()
const jobsDispatchContext = createContext()

export const useJobsContext = () => useContext(jobsContext)
export const useJobsDispatchContext = () => useContext(jobsDispatchContext)

const JobsContext = ({ children }) => {
  const [State, Dispatch] = useReducer(
    resourceReducer,
    fetchResource(RESOURCE.jobs)
  )

  return (
    <jobsContext.Provider value={State}>
      <jobsDispatchContext.Provider value={Dispatch}>
        {children}
      </jobsDispatchContext.Provider>
    </jobsContext.Provider>
  )
}

export default JobsContext
