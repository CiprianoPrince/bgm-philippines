import React from "react"

import { Container } from "reactstrap"

import EmployeeTestimonialTitle from "./EmployeeTestimonialTitle"
import EmployeeTestimonialSwiper from "./EmployeeTestimonialSwiper"

const EmployeeTestimonialContainer = () => {
  return (
    <>
      <Container fluid tag='section' className='py-5 my-5 bg-primary'>
        <Container className='text-center'>
          <EmployeeTestimonialTitle />
          <EmployeeTestimonialSwiper />
        </Container>
      </Container>
    </>
  )
}

export default EmployeeTestimonialContainer
