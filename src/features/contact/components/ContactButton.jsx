import React from "react"
import ButtonStyled from "../../../components/ui/ButtonStyled"

const ContactButton = () => {
  return (
    <>
      <ButtonStyled
        type='submit'
        color='primary'
        className='d-block fw-bold ms-auto'
      >
        Send message
      </ButtonStyled>
    </>
  )
}

export default ContactButton
