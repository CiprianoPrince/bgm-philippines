import { useCallback } from "react"

import { handleDeleteOne } from "../../../helper/resourceReducer"

import { deleteOne, successDelete } from "../helper/renderToast"
import RESOURCES from "../data/availableResources"
import formatSentenceCaseSingular from "../utils/formatSentenceCaseSingular"
import formatSentenceCase from "../utils/formatSentenceCase"

const useDeleteHandler = (resource, data, dispatch) => {
  const handleDelete = useCallback(async () => {
    let name
    switch (resource) {
      case RESOURCES.employees:
        name = `${data.firstName} ${data.lastName}`
        break
      default:
        break
    }
    const { isConfirmed } = await deleteOne(
      formatSentenceCase(name),
      formatSentenceCaseSingular(resource)
    )
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

  return handleDelete
}

export default useDeleteHandler
