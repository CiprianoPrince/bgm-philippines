import React, { useCallback, useMemo, useState } from "react"

import ReactDataTable from "react-data-table-component"
import getResourceContext from "../helper/getResourceContext"
import getResourceDispatchContext from "../helper/getResourceDispatchContext"
import { addOne, handleSave, successAdd } from "../helper/renderToast"
import formatSentenceCaseSingular from "../utils/formatSentenceCaseSingular"
import getFields from "../helper/getFields"
import getSchema from "../helper/getSchema"
import AddButton from "./ui/AddButton"
import CancelButton from "./ui/CancelButton"
import { handleAddOne } from "../../../helper/resourceReducer"
import BGMStack from "../../../components/ui/BGMStack"
import { BiPlus } from "react-icons/bi"
import FilterField from "./FilterField"
import formatSentenceCase from "../utils/formatSentenceCase"
import getColumns from "../helper/getColumns"
import { bgmStyles, bgmThemes } from "../data/bgmStyles"
import styled from "styled-components"
import { v4 } from "uuid"
import { Button } from "reactstrap"

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
      data.firstName &&
      data.firstName.toLowerCase().includes(filterText.toLowerCase())
  )

  const handleAdd = useCallback(async () => {
    const { isConfirmed, value } = await addOne(
      formatSentenceCaseSingular(resource),
      getFields[resource],
      getSchema[resource],
      handleSave,
      "",
      [AddButton, CancelButton]
    )
    if (isConfirmed) {
      dispatch(handleAddOne({ key: resource, data: { id: v4(), ...value } }))
      successAdd()
    }
  }, [dispatch, resource])

  const SubHeaderAddButton = useCallback(
    (title) => {
      return (
        <BGMStack direction='horizontal' gap={2}>
          <AddButtonStyled color='light' onClick={handleAdd}>
            <BiPlus className='fw-bold' />
          </AddButtonStyled>
          <h1 className='d-inline-block m-0'>{title}</h1>
        </BGMStack>
      )
    },
    [handleAdd]
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
          title={SubHeaderAddButton(formatSentenceCase(resource))}
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

const AddButtonStyled = styled(Button)`
  width: 45px;
  height: 45px;
  border: 2px solid var(--bs-primary);
  border-radius: 50%;
  background-color: var(--bg-light);

  & svg {
    color: var(--bs-primary);
  }

  &:hover {
    svg {
      color: var(--bs-light);
    }

    background-color: var(--bs-primary);
    border-color: var(--bs-primary);
  }
  &:focus:active {
    color: var(--bs-light);
    background-color: var(--bs-primary);
    border-color: var(--bs-primary);
  }
`
