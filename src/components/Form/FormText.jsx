import React from "react"
import { FormText as BsFormText } from "reactstrap"

const FormText = ({ error }) => {
  return (
    <>
      <BsFormText color='danger'>{error}</BsFormText>
    </>
  )
}

export default FormText
