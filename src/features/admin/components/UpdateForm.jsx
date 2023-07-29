import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { Button, Form, FormText, FormGroup, Input, Label } from "reactstrap"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import BGMStack from "../../../components/ui/BGMStack"
import { v4 } from "uuid"

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  address: z.string().min(3),
})

const UpdateForm = ({ user, swal }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      ...user,
    },
    resolver: zodResolver(schema),
  })
  const { errors, isValid } = formState

  const handleCancel = () => {
    swal.close({
      isConfirmed: false,
      isDenied: false,
      isDismissed: true,
    })
  }

  const handleSave = (formValues) => {
    if (isValid) {
      swal.close({
        isConfirmed: true,
        isDenied: false,
        isDismissed: false,
        value: { id: user?.id ? user.id : v4(), ...formValues },
      })
    }
  }

  const registerRs = (fieldName, options = {}) => {
    const registeredField = register(fieldName, options)
    const ref = registeredField.ref
    delete registeredField.ref
    return { ...registeredField, innerRef: ref }
  }

  return (
    <>
      <Form
        className='mx-auto'
        onSubmit={handleSubmit(handleSave)}
        onReset={reset}
      >
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input {...registerRs("name")} placeholder='Your name' />
          <FormText color='danger'>{errors.name?.message}</FormText>
        </FormGroup>

        <FormGroup>
          <Label for='email'>Email</Label>
          <Input {...registerRs("email")} placeholder='Your email address' />
          <FormText color='danger'>{errors?.email?.message}</FormText>
        </FormGroup>

        <FormGroup>
          <Label for='phone'>Address</Label>
          <Input {...registerRs("address")} placeholder='Your phone number' />
          <FormText color='danger'>{errors.address?.message}</FormText>
        </FormGroup>

        <BGMStack
          direction='horizontal'
          className='justify-content-end'
          gap={2}
        >
          <Button
            type='submit'
            color='primary'
            size='md'
            className='d-block text-light fw-bold'
          >
            Save
          </Button>
          <Button
            type='submit'
            color='secondary'
            size='md'
            className='d-block text-light fw-bold'
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </BGMStack>
      </Form>
    </>
  )
}

export default UpdateForm
