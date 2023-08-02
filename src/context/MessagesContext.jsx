import React, { createContext, useContext, useReducer } from "react"
import { RESOURCE } from "../data/constants"
import fetchResource from "../services/fetchResource"
import resourceReducer from "../helper/resourceReducer"

const messagesContext = createContext()
const messagesDispatchContext = createContext()

export const useMessagesContext = () => useContext(messagesContext)
export const useMessagesDispatchContext = () =>
  useContext(messagesDispatchContext)

const MessagesContext = ({ children }) => {
  const [State, Dispatch] = useReducer(
    resourceReducer,
    fetchResource(RESOURCE.messages)
  )

  return (
    <messagesContext.Provider value={State}>
      <messagesDispatchContext.Provider value={Dispatch}>
        {children}
      </messagesDispatchContext.Provider>
    </messagesContext.Provider>
  )
}

export default MessagesContext
