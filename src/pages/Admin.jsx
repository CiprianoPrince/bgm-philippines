import React from "react"

import styled from "styled-components"

import DataTable from "react-data-table-component"

import BGMStack from "../components/ui/BGMStack"

import fakeUsers from "../features/admin/data/fakeUser"
import columns from "../features/admin/data/columns"
import FilterComponent from "../features/admin/components/FilterComponent"
import { bgmStyles, bgmThemes } from "../features/admin/data/bgmStyles"
import BGMAdminMain from "../features/admin/layout/BGMAdminMain"
import BGMAdminHeader from "../features/admin/layout/BGMAdminHeader"
import BGMAdminSideNav from "../features/admin/layout/BGMAdminSideNav"

const Admin = () => {
  document.title = "BGM Phillipines Inc. | Admin panel"

  const [filterText, setFilterText] = React.useState("")
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(true)

  const filteredItems = fakeUsers.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  )

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText("")
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  return (
    <>
      {/* <BGMAdminHeader /> */}

      <BGMAdminSideNav />

      <BGMAdminMain>
        <BGMStack
          direction='horizontal'
          className='vh-100 position-relative'
          gap={3}
        >
          <DataTableStyled className='bg-light shadow border rounded-2 align-self-start p-1 m-1 p-md-3 m-md-3 p-lg-5 m-lg-5'>
            <DataTable
              title='Movie List'
              data={filteredItems}
              columns={columns}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              selectableRows
              persistTableHeader
              customStyles={bgmStyles(bgmThemes.default)}
            />
          </DataTableStyled>
        </BGMStack>
      </BGMAdminMain>
    </>
  )
}

export default Admin

const DataTableStyled = styled.div`
  width: 100%;
`
