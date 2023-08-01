import { useCallback } from "react"
import { Button, Input, InputGroup } from "reactstrap"

import {
  closeAdminSideNav,
  useAdminSideNavContext,
  useAdminSideNavDispatchContext,
} from "../context/AdminSideNavContext"

const FilterField = ({ filterText, onFilter, onClear }) => {
  const isAdminSideNavShown = useAdminSideNavContext()
  const dispatch = useAdminSideNavDispatchContext()

  const closeSideNav = useCallback(() => {
    if (!isAdminSideNavShown) return
    dispatch(closeAdminSideNav())
  }, [dispatch, isAdminSideNavShown])

  return (
    <>
      <InputGroup className='w-auto'>
        <Input
          placeholder='Search...'
          id='search'
          type='text'
          aria-label='Search Input'
          value={filterText}
          onChange={onFilter}
          onFocus={closeSideNav}
        />
        <Button color='dark' className=' text-light fw-bold' onClick={onClear}>
          Clear
        </Button>
      </InputGroup>
    </>
  )
}

export default FilterField
