import React from "react"
import { Container } from "reactstrap"
import CoreValuesTitle from "./CoreValuesTitle"
import CoreValuesText from "./CoreValuesText"

const CoreValuesContainer = () => {
  return (
    <Container tag='section' className='my-5 p-5 '>
      <CoreValuesTitle />
      <CoreValuesText />
    </Container>
  )
}

export default CoreValuesContainer
