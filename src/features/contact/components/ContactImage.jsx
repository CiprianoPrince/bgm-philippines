import React from "react"
import { messageSentSvg } from "../assets"

const ContactImage = () => {
  return (
    <>
      <img className='img-fluid' src={messageSentSvg} alt='message sent svg' />
    </>
  )
}

export default ContactImage
