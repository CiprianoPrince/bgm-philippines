import React from "react"
import { Col, Row } from "reactstrap"
import styled from "styled-components"
import { brushSvg, codeSvg, usergroupSvg } from "../../assets"

const ServicesWeOfferCard = () => {
  return (
    <>
      <Row className='m-0'>
        <ColStyled xs={12} lg={4} className='mb-5'>
          <DivStyled className='shadow p-4' svgLogo={codeSvg}>
            <h3 className='bgm-fs-1 fw-semibold text-primary mt-5'>
              No-Code Development
            </h3>
            <p className='bgm-fs--1 text-dark'>
              Our team builds a system or application successfully with a
              code-free development that works in all platform.
            </p>
          </DivStyled>
        </ColStyled>

        <ColStyled xs={12} lg={4} className='mb-5'>
          <DivStyled className='shadow p-4' svgLogo={brushSvg}>
            <h3 className='bgm-fs-1 fw-semibold text-primary mt-5'>
              UI/UX Design Services
            </h3>
            <p className='bgm-fs--1 text-dark'>
              We create interactive visual design using the right cutting-edge
              technology.
            </p>
          </DivStyled>
        </ColStyled>

        <ColStyled xs={12} lg={4} className='mb-5'>
          <DivStyled className='shadow p-4' svgLogo={usergroupSvg}>
            <h3 className='bgm-fs-1 fw-semibold text-primary mt-5'>
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

const ColStyled = styled(Col)``

const DivStyled = styled.div`
  position: relative;
  height: 20rem;
  transition: all 250ms ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    top: -3rem;
    right: 50%;
    left: 38.5%;
    border-radius: 50%;
    box-shadow: 0 0 0.5rem var(--bs-primary);
    background-color: var(--bs-primary);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: ${({ svgLogo }) => `url(${svgLogo})`};
  }

  &:hover {
    transform: scale(1.02);
  }
`
