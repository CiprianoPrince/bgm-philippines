import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form as BsForm } from "reactstrap"
import FormGroup from "./FormGroup"
import FormButton from "./FormButton"
import BGMStack from "../ui/BGMStack"

const Form = ({
  fields,
  schema,
  defaultValues = {},
  handleValidData,
  className = "",
  Buttons = [FormButton],
}) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })
  const { errors } = formState
  const registerRs = (fieldName, options = {}) => {
    const registeredField = register(fieldName, options)
    const ref = registeredField.ref
    delete registeredField.ref
    return { ...registeredField, innerRef: ref }
  }

  return (
    <>
      <BsForm
        className={className}
        onSubmit={handleSubmit(handleValidData)}
        onReset={reset}
      >
        {fields.map(({ fieldName, type, label, placeholder }) => (
          <FormGroup
            key={fieldName}
            fieldName={fieldName}
            type={type}
            label={label}
            placeholder={placeholder}
            registerRs={registerRs}
            errors={errors}
          />
        ))}
        <BGMStack
          direction='horizontal'
          gap={3}
          className='justify-content-end'
        >
          {Buttons.map((Button) => (
            <Button />
          ))}
        </BGMStack>
      </BsForm>
    </>
  )
}

export default Form
