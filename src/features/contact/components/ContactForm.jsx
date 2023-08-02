import React from "react"
import styled from "styled-components"
import Form from "../../../components/Form/Form"
import contactFields from "../data/contactFields"
import contactSchema from "../data/contactSchema"
import addMessage from "../service/addMessage"
import ContactButton from "./ContactButton"

const ContactForm = () => {
  return (
    <>
      <FormStyled
        fields={contactFields}
        schema={contactSchema}
        handleValidData={addMessage}
        className='mx-auto'
        Button={ContactButton}
      />
    </>
  )
}

export default ContactForm

const FormStyled = styled(Form)`
  width: min(35rem, 100%);
`
