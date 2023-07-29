import React, { createContext, useContext, useReducer } from "react"

const adminSideNavContext = createContext()
const adminSideNavDispatchContext = createContext()

export const useAdminSideNavContext = () => useContext(adminSideNavContext)
export const useAdminSideNavDispatchContext = () =>
  useContext(adminSideNavDispatchContext)

const adminSideNavReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return !state
    default:
      return state
  }
}

export const toggleadminSideNav = () => {
  return { type: "toggle" }
}

const AdminSideNavContext = ({ children }) => {
  const [adminSideNavState, adminSideNavDispatch] = useReducer(
    adminSideNavReducer,
    false
  )

  return (
    <adminSideNavContext.Provider value={adminSideNavState}>
      <adminSideNavDispatchContext.Provider value={adminSideNavDispatch}>
        {children}
      </adminSideNavDispatchContext.Provider>
    </adminSideNavContext.Provider>
  )
}

export default AdminSideNavContext
