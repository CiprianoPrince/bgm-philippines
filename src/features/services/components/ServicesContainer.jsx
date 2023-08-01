import React from "react"
import { Container } from "reactstrap"
import ServicesHeader from "./ServicesHeader"
import { BePartOfTheTeamSection } from "../../../components/BePartOfTheTeamSection"
import { StrengthsAndFeaturesSection } from "./StrengthsAndFeaturesSection"
import { ServicesWeOfferSection } from "./ServicesWeOfferSection"
import { DevelopmentProcessSection } from "./DevelopmentProcessSection"
import { TechnologiesSection } from "./TechnologiesSection"

const ServicesContainer = () => {
  return (
    <>
      <Container fluid tag='section' className='p-0 mt-5'>
        <ServicesHeader />
        <StrengthsAndFeaturesSection />
        <ServicesWeOfferSection />
        <DevelopmentProcessSection />
        <TechnologiesSection />
        <BePartOfTheTeamSection />
      </Container>
    </>
  )
}

export default ServicesContainer
