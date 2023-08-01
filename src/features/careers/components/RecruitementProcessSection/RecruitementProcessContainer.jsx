import React from "react"
import { Container } from "reactstrap"
import RecruitementProcessTitle from "./RecruitementProcessTitle"

const RecruitementProcessContainer = () => {
  return (
    <>
      <Container tag='section' className='my-5 p-5 '>
        <RecruitementProcessTitle />
      </Container>
    </>
  )
}

export default RecruitementProcessContainer
