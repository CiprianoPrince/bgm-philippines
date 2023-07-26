import React, { createContext, useContext, useReducer } from "react"

const authContext = createContext()
const authDispatchContext = createContext()

export const useAuthContext = () => useContext(authContext)
export const useAuthDispatchContext = () => useContext(authDispatchContext)

const authReducer = () => {}

export const handleLogin = (req, res) => {}
export const handleLogout = (req, res) => {}

const AuthContext = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {})

  return (
    <authContext.Provider value={authState}>
      <authDispatchContext.Provider value={authDispatch}>
        {children}
      </authDispatchContext.Provider>
    </authContext.Provider>
  )
}

export default AuthContext
