import React from "react"
import { Col, Container, Row } from "reactstrap"
import EmployeeBenefitsImage from "./EmployeeBenefitsImage"
import EmployeeBenefitsTitle from "./EmployeeBenefitsTitle"
import EmployeeBenefitsText from "./EmployeeBenefitsText"
import EmployeeBenefitsButton from "./EmployeeBenefitsButton"

const EmployeeBenefitContainer = () => {
  return (
    <>
      <Container tag='section' className='py-5'>
        <Row>
          <Col xs={12} lg={6} className='p-3'>
            <EmployeeBenefitsImage />
          </Col>

          <Col xs={12} lg={6} className='d-flex flex-column justify-content-center align-items-center p-3'>
            <EmployeeBenefitsTitle />
            <EmployeeBenefitsText />
            <EmployeeBenefitsButton />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EmployeeBenefitContainer
