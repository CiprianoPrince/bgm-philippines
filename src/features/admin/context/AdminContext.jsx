import React, { createContext, useContext, useReducer } from "react"

const adminContext = createContext()
const adminDispatchContext = createContext()

export const useAdminContext = () => useContext(adminContext)
export const useAdminDispatchContext = () => useContext(adminDispatchContext)

const ADMIN_ACTION = {
  addOne: "addOne",
  addMany: "addMany",
  findOne: "findOne",
  findMany: "findMany",
  updateOne: "updateOne",
  updateMany: "updateMany",
  deleteOne: "deleteOne",
  DeleteMany: "deleteMany",
}

const adminReducer = (state, action) => {}

const AdminContext = ({ children }) => {
  const [adminState, adminDispatch] = useReducer(adminReducer, {
    filterText: "",
    data: [],
    resetPagination: false,
    selectedRow: [],
  })

  return (
    <adminContext.Provider value={adminState}>
      <adminDispatchContext.Provider value={adminDispatch}>
        {children}
      </adminDispatchContext.Provider>
    </adminContext.Provider>
  )
}

export default AdminContext
