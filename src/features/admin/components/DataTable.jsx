import React, { useMemo, useState } from "react"

import ReactDataTable from "react-data-table-component"
import getResourceContext from "../helper/getResourceContext"
import getResourceDispatchContext from "../helper/getResourceDispatchContext"
import FilterField from "./FilterField"
import getColumns from "../helper/getColumns"
import { bgmStyles, bgmThemes } from "../data/bgmStyles"
import styled from "styled-components"
import SubHeaderAddButton from "./SubHeaderAddButton"

const DataTable = ({ resource }) => {
  const currentContext = useMemo(() => getResourceContext[resource], [resource])
  const currentDispatchContext = useMemo(
    () => getResourceDispatchContext[resource],
    [resource]
  )

  const data = currentContext()
  const dispatch = currentDispatchContext()

  const [filterText, setFilterText] = useState("")
  const [resetPaginationToggle, setResetPaginationToggle] = useState(true)

  const filteredData = data.filter(
    (data) =>
      (data.firstName &&
        data.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (data.name && data.name.toLowerCase().includes(filterText.toLowerCase()))
  )

  const TitleWithAddButton = (
    <SubHeaderAddButton resource={resource} dispatch={dispatch} />
  )

  const SubHeaderFilterField = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText("")
      }
    }

    return (
      <FilterField
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  return (
    <>
      <DataTableDivStyled className='bg-light shadow border rounded-2 align-self-start p-1 m-1 p-md-3 m-md-3 p-lg-5 m-lg-5'>
        <DataTableStyled
          title={TitleWithAddButton}
          data={filteredData}
          columns={getColumns[resource]}
          responsive
          pagination
          subHeader
          selectableRows
          selectableRowsHighlight
          // contextActions={contextActions}
          // onSelectedRowsChange={handleRowSelected}
          clearSelectedRows
          persistTableHeader
          defaultSortFieldId={1}
          onRowDoubleClicked={(row, e) => console.log(row, e)}
          paginationResetDefaultPage={resetPaginationToggle}
          subHeaderComponent={[SubHeaderFilterField]}
          customStyles={bgmStyles(bgmThemes.default)}
        />
      </DataTableDivStyled>
    </>
  )
}

export default DataTable

const DataTableDivStyled = styled.div`
  width: 100%;
`

const DataTableStyled = styled(ReactDataTable)`
  & input[type="checkbox"] {
    accent-color: var(--bs-primary) !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
`
