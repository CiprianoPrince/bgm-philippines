import React from "react"
import { Col, Row } from "reactstrap"
import styled from "styled-components"
import { hybridJpg, workFromHomeJpg, workOnSiteJpg } from "../../assets"

const WorkArrangementImages = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={4} className='mb-3'>
          <DivStyled
            className='shadow'
            bgImage={workOnSiteJpg}
          >
            <p className='bgm-fs-2 text-primary fw-bold z-1 m-auto'>
              Work Onsite
            </p>
          </DivStyled>
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <DivStyled className='shadow ' bgImage={hybridJpg}>
            <p className='bgm-fs-2 text-primary fw-bold z-1'>Hybrid</p>
          </DivStyled>
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <DivStyled
            className='shadow '
            bgImage={workFromHomeJpg}
          >
            <p className='bgm-fs-2 text-primary fw-bold z-1'>Work Onsite</p>
          </DivStyled>
        </Col>
      </Row>
    </>
  )
}

export default WorkArrangementImages

const DivStyled = styled.div`
  position: relative;
  min-height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3%;
  transition: all 250ms ease-in-out;

  &:hover {
    filter: grayscale(0%);
    &::after {
      background-color: transparent;
    }
    &::before {
      filter: grayscale(0%);
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 95%, 0.5);
    border-radius: 3%;
    transition: all 250ms ease-in-out;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    filter: grayscale(100%);
    border-radius: 3%;
    transition: all 250ms ease-in-out;
  }
`
