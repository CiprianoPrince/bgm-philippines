import React from "react"
import { FormGroup as BgmFormGroup, Input, Label } from "reactstrap"
import FormText from "./FormText"

const FormGroup = ({
  fieldName,
  type,
  label,
  placeholder,
  registerRs,
  errors,
}) => {
  return (
    <>
      <BgmFormGroup className="text-start">
        <Label for={fieldName}>{label}</Label>
        <Input
          type={type}
          {...registerRs(fieldName)}
          placeholder={placeholder}
        />
        <FormText error={errors[fieldName]?.message} />
      </BgmFormGroup>
    </>
  )
}

export default FormGroup
