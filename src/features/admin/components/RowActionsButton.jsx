import { memo, useMemo } from "react"

import BGMStack from "../../../components/ui/BGMStack"

import EditIconButton from "./ui/EditIconButton"
import DeleteIconButton from "./ui/DeleteIconButton"

import getResourceDispatchContext from "../helper/getResourceDispatchContext"
import useUpdateHandler from "../hooks/useUpdateHandler"
import useDeleteHandler from "../hooks/useDeleteHandler"

const RowActionsButton = memo(({ resource, data }) => {
  const currentDispatchContext = useMemo(
    () => getResourceDispatchContext[resource],
    [resource]
  )
  const dispatch = currentDispatchContext()

  const handleUpdate = useUpdateHandler(resource, data, dispatch)
  const handleDelete = useDeleteHandler(resource, data, dispatch)

  return (
    <>
      <BGMStack direction='horizontal' gap={2}>
        <EditIconButton handleUpdate={handleUpdate} />

        <DeleteIconButton handleDelete={handleDelete} />
      </BGMStack>
    </>
  )
})

export default RowActionsButton
