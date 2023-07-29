import React, { useCallback, useMemo, useState } from "react"

import styled from "styled-components"

import DataTable from "react-data-table-component"

import BGMStack from "../components/ui/BGMStack"

import columns from "../features/admin/data/columns"
import FilterComponent from "../features/admin/components/FilterComponent"
import { bgmStyles, bgmThemes } from "../features/admin/data/bgmStyles"
import BGMAdminMain from "../features/admin/layout/BGMAdminMain"
import BGMAdminHeader from "../features/admin/layout/BGMAdminHeader"
import BGMAdminSideNav from "../features/admin/layout/BGMAdminSideNav"
import {
  USER_TOAST,
  handleAddOneUser,
  useUserContext,
  useUserDispatchContext,
} from "../features/admin/context/UserContext"
import { Button } from "reactstrap"

const Admin = () => {
  document.title = "BGM Phillipines Inc. | Admin panel"

  const users = useUserContext()
  const dispatch = useUserDispatchContext()

  const [filterText, setFilterText] = useState("")
  const [resetPaginationToggle, setResetPaginationToggle] = useState(true)

  const filteredUsers = users.filter(
    (user) =>
      user.name && user.name.toLowerCase().includes(filterText.toLowerCase())
  )

  const handleAdd = useCallback(async () => {
    const { isConfirmed, value } = await USER_TOAST.addOne()
    if (isConfirmed) dispatch(handleAddOneUser(value))
  }, [dispatch])

  const SubHeaderAddButton = useMemo(() => {
    return (
      <Button color='primary' className='text-light' onClick={handleAdd}>
        Add
      </Button>
    )
  }, [handleAdd])

  const SubHeaderFilterField = useMemo(() => {
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
              data={filteredUsers}
              columns={columns}
              pagination
              subHeader
              selectableRows
              persistTableHeader
              paginationResetDefaultPage={resetPaginationToggle}
              defaultSortFieldId={1}
              // subHeaderComponent={subHeaderComponentMemo}
              subHeaderComponent={[SubHeaderAddButton, SubHeaderFilterField]}
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
