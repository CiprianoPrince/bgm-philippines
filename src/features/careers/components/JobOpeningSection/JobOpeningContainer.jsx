import React from "react"
import { Container } from "reactstrap"
import JobOpeningTitle from "./JobOpeningTitle"
import JobOpeningCards from "./JobOpeningCards"

const JobOpeningContainer = () => {
  return (
    <>
      <Container id="JobOpening" tag='section' className='my-5 p-5 '>
        <JobOpeningTitle />
        <JobOpeningCards />
      </Container>
    </>
  )
}

export default JobOpeningContainer
