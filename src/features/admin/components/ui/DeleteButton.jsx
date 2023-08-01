import React from "react"
import ButtonStyled from "../../../../components/ui/ButtonStyled"
import { handleDelete } from "../../helper/renderToast"

const DeleteButton = () => {
  return (
    <>
      <ButtonStyled color='danger' type='button' onClick={handleDelete}>
        Cancel
      </ButtonStyled>
    </>
  )
}

export default DeleteButton
