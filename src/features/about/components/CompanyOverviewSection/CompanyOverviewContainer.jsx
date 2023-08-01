import React from "react"
import { Container } from "reactstrap"
import CompanyOverviewTitle from "./CompanyOverviewTitle"
import CompanyOverviewText from "./CompanyOverviewText"

const CompanyOverviewContainer = () => {
  return (
    <Container tag='section' fluid className='bg-light p-5'>
      <Container>
        <CompanyOverviewTitle />
        <CompanyOverviewText />
      </Container>
    </Container>
  )
}

export default CompanyOverviewContainer
