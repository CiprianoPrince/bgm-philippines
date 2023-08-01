import React from "react"
import { Container } from "reactstrap"
import DevelopmentProcessTitle from "./TechnologiesTitle"
import DevelopmentProcessText from "./TechnologiesText"
import DevelopmentProcessImage from "./TechnologiesImages"

const DevelopmentProcessContainer = () => {
  return (
    <>
      <Container tag='section' className='bg p-5'>
        <DevelopmentProcessTitle />
        <DevelopmentProcessText />
        <DevelopmentProcessImage />
      </Container>
    </>
  )
}

export default DevelopmentProcessContainer
