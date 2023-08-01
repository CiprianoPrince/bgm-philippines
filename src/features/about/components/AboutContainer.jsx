import React from "react"
import { Container } from "reactstrap"
import AboutHeader from "./AboutHeader"
import { CompanyOverviewSection } from "./CompanyOverviewSection"
import { MissionVisionSection } from "./MissionVisionSection"
import { BePartOfTheTeamSection } from "../../../components/BePartOfTheTeamSection"
import { CoreValuesSection } from "./CoreValuesSection"
import { MeetTheTeamSection } from "./MeetTheTeamSection"

const AboutContainer = () => {
  return (
    <Container fluid tag='section' className='p-0 mt-5'>
      <AboutHeader />
      <CompanyOverviewSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <MeetTheTeamSection />
      <BePartOfTheTeamSection />
    </Container>
  )
}

export default AboutContainer
