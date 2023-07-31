import { useMemo } from "react"

import BGMStack from "../../../components/ui/BGMStack"

import EditIconButton from "./ui/EditIconButton"
import DeleteIconButton from "./ui/DeleteIconButton"

import getResourceDispatchContext from "../helper/getResourceDispatchContext"

import useRowActionHandler from "../hooks/useRowActionHandler"

const RowActionsButton = ({ resource, data }) => {
  const currentDispatchContext = useMemo(
    () => getResourceDispatchContext[resource],
    [resource]
  )
  const dispatch = currentDispatchContext()

  const [handleUpdate, handleDelete] = useRowActionHandler(
    resource,
    data,
    dispatch
  )

  return (
    <>
      <BGMStack direction='horizontal' gap={2}>
        <EditIconButton handleUpdate={handleUpdate} />

        <DeleteIconButton handleDelete={handleDelete} />
      </BGMStack>
    </>
  )
}

export default RowActionsButton
