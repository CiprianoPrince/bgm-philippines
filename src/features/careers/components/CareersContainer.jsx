import React from "react"
import { Container } from "reactstrap"
import CareersHeader from "./CareersHeader"
import { EmployeeBenefitSection } from "../../../components/EmployeeBenefitSection"
import { MeetTheTeamSection } from "../../../components/MeetTheTeamSection"
import { WorkArrangementSection } from "./WorkArrangementSection"
import { JobOpeningSection } from "./JobOpeningSection"
import { RecruitementProcessSection } from "./RecruitementProcessSection"
import { CareerProgressionSection } from "./CareerProgressionSection"

const CareersContainer = () => {
  return (
    <>
      <Container fluid tag='section' className='p-0 mt-5'>
        <CareersHeader />
        <CareerProgressionSection />
        <JobOpeningSection />
        <RecruitementProcessSection />
        <EmployeeBenefitSection />
        <WorkArrangementSection />
        <MeetTheTeamSection />
      </Container>
    </>
  )
}

export default CareersContainer
