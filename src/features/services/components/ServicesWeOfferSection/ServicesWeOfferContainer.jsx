import React from "react"
import { Container } from "reactstrap"
import ServicesWeOfferTitle from "./ServicesWeOfferTitle"
import ServicesWeOfferCard from "./ServicesWeOfferCard"

const ServicesWeOfferContainer = () => {
  return (
    <>
      <Container tag='section' className='py-5'>
        <ServicesWeOfferTitle />
        <ServicesWeOfferCard />
      </Container>
    </>
  )
}

export default ServicesWeOfferContainer
