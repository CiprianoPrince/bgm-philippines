import React from "react"
import { Col, Row } from "reactstrap"
import { cultureWebp1, cultureWebp2, cultureWebp3 } from "../../assets"
import styled from "styled-components"

const OurCultureImages = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={4} className='my-2'>
          <CultureDivStyled bgImg={cultureWebp1} className='shadow p-2'>
            <p className='bgm-fs-2 fw-semibold text-primary text-uppercase m-0 z-1'>
              fun and friendly work environment
            </p>

            <p className='bgm-fs--1 fw-semibold text-light m-0 z-1'>
              We are more than just your coworkers. Our Team from different
              levels of the organization: Team Leaders and Engineers are all
              approachable and engaging. We promote and maintain our camaraderie
              through our fun-filled company events and engagement activities.
            </p>
          </CultureDivStyled>
        </Col>

        <Col xs={12} lg={4} className='my-2'>
          <CultureDivStyled bgImg={cultureWebp2} className='shadow p-2'>
            <p className='bgm-fs-2 fw-semibold text-primary text-uppercase m-0 z-1'>
              endless learning opportunities
            </p>

            <p className='bgm-fs--1 fw-semibold text-light m-0 z-1'>
              BGM supports its employees to continuously develop their knowledge
              and skills within a collaborative working environment, encourage
              them to share ideas, work and learn from one another.
            </p>
          </CultureDivStyled>
        </Col>

        <Col xs={12} lg={4} className='my-2'>
          <CultureDivStyled bgImg={cultureWebp3} className='shadow p-2'>
            <p className='bgm-fs-2 fw-semibold text-primary text-uppercase m-0 z-1'>
              distributed teams
            </p>

            <p className='bgm-fs--1 fw-semibold text-light m-0 z-1'>
              BGM is a distributed team where Filipino members across the
              country collaborate with members from over the nation. Some
              members work remotely and some work on site in Makati, Quezon
              City, and Cebu City .
            </p>
          </CultureDivStyled>
        </Col>
      </Row>
    </>
  )
}

export default OurCultureImages

const CultureDivStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  text-align: center;
  min-height: 20rem;
  border-radius: 3%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  ${({ bgImg }) => (bgImg ? ` background-image: url(${bgImg});` : ``)}

  transition: all 250ms ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 3%;
    background-color: hsl(0, 0%, 95%, 0.75);
  }

  & :nth-child(2) {
    display: none;
  }

  &:hover {
    transform: scale(1.02);
    &::after {
      background-color: hsl(245, 17%, 29%, 0.75);
    }
    :nth-child(1) {
      display: none;
    }
    :nth-child(2) {
      display: block;
    }
  }
`
