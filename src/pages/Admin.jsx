import React from "react"

import BGMAdminMain from "../features/admin/layout/BGMAdminMain"
import BGMNav from "../layouts/BGMNav/BGMNav"
import BGMAdminSideNav from "../features/admin/layout/BGMAdminSideNav"

import { useParams } from "react-router-dom"

import DataTable from "../features/admin/components/DataTable"
import BGMStack from "../components/ui/BGMStack"

const Admin = () => {
  document.title = "BGM Phillipines Inc. | Admin panel"

  const { resource } = useParams()

  return (
    <>
      <BGMNav />

      <BGMAdminSideNav />

      <BGMAdminMain>
        <BGMStack
          direction='horizontal'
          className='vh-100 position-relative'
          gap={3}
        >
          <DataTable resource={resource} />
        </BGMStack>
      </BGMAdminMain>
    </>
  )
}

export default Admin
