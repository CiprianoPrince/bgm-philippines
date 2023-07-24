import React from "react"
import BGMFooter from "./BGMFooter"
import BGMHeader from "./BGMHeader"
import { Outlet } from "react-router-dom"

const BGMLayout = () => {
  return (
    <>
      <BGMHeader />
      <Outlet />
      <BGMFooter />
    </>
  )
}

export default BGMLayout
