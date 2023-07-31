import { useCallback } from "react"

import {
  handleDeleteOne,
  handleUpdateOne,
} from "../../../helper/resourceReducer"

import formatSentenceCaseSingular from "../utils/formatSentenceCaseSingular"

import {
  deleteOne,
  handleSave,
  successDelete,
  successUpdate,
  updateOne,
} from "../helper/renderToast"

import getFields from "../helper/getFields"
import getSchema from "../helper/getSchema"

import CancelButton from "../components/ui/CancelButton"
import UpdateButton from "../components/ui/UpdateButton"

const useRowActionHandler = (resource, data, dispatch) => {
  const handleUpdate = useCallback(async () => {
    const { isConfirmed, value } = await updateOne(
      formatSentenceCaseSingular(resource),
      getFields[resource],
      getSchema[resource],
      data,
      handleSave,
      "",
      [UpdateButton, CancelButton]
    )
    if (isConfirmed) {
      dispatch(
        handleUpdateOne({
          key: resource,
          id: data.id,
          data: { id: data.id, ...value },
        })
      )
      successUpdate()
    }
  }, [dispatch, resource, data])

  const handleDelete = useCallback(async () => {
    const { isConfirmed } = await deleteOne()
    if (isConfirmed) {
      dispatch(
        handleDeleteOne({
          key: resource,
          id: data.id,
        })
      )
      successDelete()
    }
  }, [dispatch, resource, data])

  return [handleUpdate, handleDelete]
}

export default useRowActionHandler
