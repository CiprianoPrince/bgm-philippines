import React from "react"
import { Container } from "reactstrap"
import WorkArrangementTitle from "./WorkArrangementTitle"
import WorkArrangementImages from "./WorkArrangementImages"

const WorkArrangementContainer = () => {
  return (
    <>
      <Container tag='section' className='my-5 p-5 '>
        <WorkArrangementTitle />
        <WorkArrangementImages />
      </Container>
    </>
  )
}

export default WorkArrangementContainer
