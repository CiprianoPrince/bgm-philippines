import React from "react"
import ButtonStyled from "../../../../components/ui/ButtonStyled"

const DeleteButton = ({ handleCancel }) => {
  return (
    <>
      <ButtonStyled color='danger' type='button' onClick={handleCancel}>
        Cancel
      </ButtonStyled>
    </>
  )
}

export default DeleteButton
