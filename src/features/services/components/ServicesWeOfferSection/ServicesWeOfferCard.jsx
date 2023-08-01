import React from "react"
import { Col, Row } from "reactstrap"
import styled from "styled-components"

const ServicesWeOfferCard = () => {
  return (
    <>
      <Row>
        <ColStyled
          xs={12}
          lg={4}
          className='d-flex justify-content-center align-items-center mb-3'
        >
          <DivStyled>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              No-Code Development
            </h3>
            <p className='bgm-fs--1 text-dark'>
              Our team builds a system or application successfully with a
              code-free development that works in all platform.
            </p>
          </DivStyled>
        </ColStyled>

        <ColStyled
          xs={12}
          lg={4}
          className='d-flex justify-content-center align-items-center mb-3'
        >
          <DivStyled>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              UI/UX Design Services
            </h3>
            <p className='bgm-fs--1 text-dark'>
              We create interactive visual design using the right cutting-edge
              technology.
            </p>
          </DivStyled>
        </ColStyled>

        <ColStyled
          xs={12}
          lg={4}
          className='d-flex justify-content-center align-items-center mb-3'
        >
          <DivStyled>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              Staff Augmentation
            </h3>
            <p className='bgm-fs--1 text-dark'>
              As a service provider, we deploy engineers to complete other
              business's team and follow their leadership and development
              process.
            </p>
          </DivStyled>
        </ColStyled>
      </Row>
    </>
  )
}

export default ServicesWeOfferCard

const ColStyled = styled(Col)`
  border: 1px solid black;
`

const DivStyled = styled.div`
  position: relative;
`
