import React, { createContext, useContext, useState } from "react"

const SideNav = createContext()
const setSideNav = createContext()

export const useSideNav = () => useContext(SideNav)
export const useSetSideNav = () => useContext(setSideNav)

const SideNavContext = ({ children }) => {
  const [isSideNavShown, SetIsSideNavShown] = useState(false)

  return (
    <SideNav.Provider value={isSideNavShown}>
      <setSideNav.Provider value={SetIsSideNavShown}>
        {children}
      </setSideNav.Provider>
    </SideNav.Provider>
  )
}

export default SideNavContext
