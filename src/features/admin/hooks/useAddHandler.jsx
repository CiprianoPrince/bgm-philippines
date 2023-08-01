import { useCallback } from "react"

import { handleAddOne } from "../../../helper/resourceReducer"

import formatSentenceCaseSingular from "../utils/formatSentenceCaseSingular"

import { addOne, handleSave, successAdd } from "../helper/renderToast"

import getFields from "../helper/getFields"
import getSchema from "../helper/getSchema"

import CancelButton from "../components/ui/CancelButton"
import { v4 } from "uuid"
import AddButton from "../components/ui/AddButton"

const useAddHandler = (resource, dispatch) => {
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

  return handleAdd
}

export default useAddHandler
