import React, { createContext, useContext, useReducer } from "react"

const adminSideNavContext = createContext()
const adminSideNavDispatchContext = createContext()

export const useAdminSideNavContext = () => useContext(adminSideNavContext)
export const useAdminSideNavDispatchContext = () =>
  useContext(adminSideNavDispatchContext)

const adminSideNavReducer = (state, action) => {
  switch (action.type) {
    case ADMINSIDENAV_ACTION.open:
      return (state = true)
    case ADMINSIDENAV_ACTION.close:
      return (state = false)
    case ADMINSIDENAV_ACTION.toggle:
      return !state
    default:
      return state
  }
}

const ADMINSIDENAV_ACTION = {
  open: "open",
  close: "close",
  toggle: "toggle",
}

export const openAdminSideNav = () => {
  return { type: ADMINSIDENAV_ACTION.open }
}

export const closeAdminSideNav = () => {
  return { type: ADMINSIDENAV_ACTION.close }
}

export const toggleAdminSideNav = () => {
  return { type: ADMINSIDENAV_ACTION.toggle }
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
