import React from "react"
import { Container } from "reactstrap"
import CareerProgressionTitle from "./CareerProgressionTitle"

const CareerProgressionContainer = () => {
  return (
    <>
      <Container tag='section' className='my-5 p-5 '>
        <CareerProgressionTitle />
      </Container>
    </>
  )
}

export default CareerProgressionContainer
