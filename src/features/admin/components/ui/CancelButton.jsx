import React from "react"
import ButtonStyled from "../../../../components/ui/ButtonStyled"
import { handleCancel } from "../../helper/renderToast"

const CancelButton = ({}) => {
  return (
    <>
      <ButtonStyled color='gray' type='button' onClick={handleCancel}>
        Cancel
      </ButtonStyled>
    </>
  )
}

export default CancelButton
