import React from "react"
import { Container } from "reactstrap"
import StrengthsAndFeaturesTitle from "./StrengthsAndFeaturesTitle"
import StrengthsAndFeaturesText from "./StrengthsAndFeaturesText"

const StrengthsAndFeaturesContainer = () => {
  return (
    <>
      <Container tag='section' className='bg p-5'>
        <Container>
          <StrengthsAndFeaturesTitle />
          <StrengthsAndFeaturesText />
        </Container>
      </Container>
    </>
  )
}

export default StrengthsAndFeaturesContainer
