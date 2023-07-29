import React, { createContext, useContext, useReducer } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import fetchFakeUsers from "../services/fetchFakeUsers"
import UpdateForm from "../components/UpdateForm"

const BGMSwal = withReactContent(Swal)

const userContext = createContext()
const userDispatchContext = createContext()

export const useUserContext = () => useContext(userContext)
export const useUserDispatchContext = () => useContext(userDispatchContext)

const USER_ACTION = {
  addOne: "addOne",
  addMany: "addMany",
  findOne: "findOne",
  findMany: "findMany",
  updateOne: "updateOne",
  updateMany: "updateMany",
  deleteOne: "deleteOne",
  DeleteMany: "deleteMany",
}

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION.addOne:
      return [...state, action.payload]
    case USER_ACTION.updateOne:
      return [
        ...state.filter((user) => user.id !== action.payload.id),
        action.payload,
      ]
    case USER_ACTION.deleteOne:
      return state.filter((user) => user.id !== action.payload.id)
    default:
      return state
  }
}

export const USER_TOAST = {
  addOne: async (user) => {
    return await BGMSwal.fire({
      color: "var(--bs-dark)",
      background: "var(--bs-light)",
      title: <h1 className='text-left'>Add User</h1>,
      html: <UpdateForm user={user} swal={BGMSwal} />,
      showConfirmButton: false,
      showCancelButton: false,
      showDenyButton: false,
    })
  },
  updateOne: async (user) => {
    return await BGMSwal.fire({
      color: "var(--bs-dark)",
      background: "var(--bs-light)",
      title: <h1 className='text-left'>Update User</h1>,
      html: <UpdateForm user={user} swal={BGMSwal} />,
      showConfirmButton: false,
      showCancelButton: false,
      showDenyButton: false,
    })
  },
  deleteOne: async (name) => {
    return await BGMSwal.fire({
      color: "var(--bs-dark)",
      background: "var(--bs-light)",
      title: <h1>Delete User</h1>,
      html: <p>{`are you sure you want to delete ${name}?`}</p>,
      showConfirmButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "var(--bs-danger)",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      cancelButtonColor: "var(--bs-secondary)",
      customClass: {
        container: `color: black`,
      },
    })
  },
}

export const handleAddOneUser = (addeduser) => {
  return { type: USER_ACTION.updateOne, payload: addeduser }
}

export const handleUpdateOneUser = (updateduser) => {
  return { type: USER_ACTION.updateOne, payload: updateduser }
}

export const handleDeleteOneUser = (id) => {
  return { type: USER_ACTION.deleteOne, payload: { id } }
}

const UserContext = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, fetchFakeUsers())

  return (
    <userContext.Provider value={userState}>
      <userDispatchContext.Provider value={userDispatch}>
        {children}
      </userDispatchContext.Provider>
    </userContext.Provider>
  )
}

export default UserContext
