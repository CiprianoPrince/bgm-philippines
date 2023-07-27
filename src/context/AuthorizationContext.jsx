import React, { createContext, useContext, useReducer } from "react"

const AuthContext = createContext()
const authDispatchContext = createContext()

export const useAuthContext = () => useContext(AuthContext)
export const useAuthDispatchContext = () => useContext(authDispatchContext)

const authReducer = () => {}

export const handleLogin = (req, res) => {}
export const handleLogout = (req, res) => {}

const AuthorizationContext = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {})

  return (
    <AuthContext.Provider value={authState}>
      <authDispatchContext.Provider value={authDispatch}>
        {children}
      </authDispatchContext.Provider>
    </AuthContext.Provider>
  )
}

export default AuthorizationContext
