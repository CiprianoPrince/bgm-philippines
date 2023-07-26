import React, { createContext, useContext, useReducer } from "react"

const sideNavContext = createContext()
const sideNavDispatchContext = createContext()

export const useSideNavContext = () => useContext(sideNavContext)
export const useSideNavDispatchContext = () =>
  useContext(sideNavDispatchContext)

const sideNavReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return !state
    default:
      return state
  }
}

export const toggleSideNav = () => {
  return { type: "toggle" }
}

const SideNavContext = ({ children }) => {
  const [sideNavState, sideNavDispatch] = useReducer(sideNavReducer, false)

  return (
    <sideNavContext.Provider value={sideNavState}>
      <sideNavDispatchContext.Provider value={sideNavDispatch}>
        {children}
      </sideNavDispatchContext.Provider>
    </sideNavContext.Provider>
  )
}

export default SideNavContext
