import React, { createContext, useContext, useReducer } from "react"
import resourceReducer from "../features/admin/helper/resourceReducer"

const benefitsContext = createContext()
const benefitsDispatchContext = createContext()

export const useResourceContext = () => useContext(benefitsContext)
export const useResourceDispatchContext = () =>
  useContext(benefitsDispatchContext)

const ResourceContext = ({ children }) => {
  const [State, Dispatch] = useReducer(resourceReducer, [])

  return (
    <benefitsContext.Provider value={State}>
      <benefitsDispatchContext.Provider value={Dispatch}>
        {children}
      </benefitsDispatchContext.Provider>
    </benefitsContext.Provider>
  )
}

export default ResourceContext
