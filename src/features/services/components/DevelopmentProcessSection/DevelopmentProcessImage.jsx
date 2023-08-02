import React from "react"
import { Col, Row } from "reactstrap"
import styled from "styled-components"

const DevelopmentProcessImage = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={6} className='p-3'>
          <DivStyed className='d-flex ps-3 align-items-center'>
            <p className='bgm-fs--1 text-dark fw-bold m-0'>
              <span className='bgm-fs-1 text-primary'>1</span> Market & Research
            </p>
          </DivStyed>
        </Col>

        <Col xs={12} md={6} className='p-3'>
          <DivStyed className='d-flex ps-3 align-items-center'>
            <p className='bgm-fs--1 text-dark fw-bold m-0'>
              <span className='bgm-fs-1 text-primary'>2</span> Planning
            </p>
          </DivStyed>
        </Col>

        <Col xs={12} md={6} className='p-3'>
          <DivStyed className='d-flex ps-3 align-items-center'>
            <p className='bgm-fs--1 text-dark fw-bold m-0'>
              <span className='bgm-fs-1 text-primary'>3</span> System Design
            </p>
          </DivStyed>
        </Col>

        <Col xs={12} md={6} className='p-3'>
          <DivStyed className='d-flex ps-3 align-items-center'>
            <p className='bgm-fs--1 text-dark fw-bold m-0'>
              <span className='bgm-fs-1 text-primary'>4</span> Project
              Initialization
            </p>
          </DivStyed>
        </Col>

        <Col xs={12} md={6} className='p-3'>
          <DivStyed className='d-flex ps-3 align-items-center'>
            <p className='bgm-fs--1 text-dark fw-bold m-0'>
              <span className='bgm-fs-1 text-primary'>5</span> Development &
              Testing
            </p>
          </DivStyed>
        </Col>

        <Col xs={12} md={6} className='p-3'>
          <DivStyed className='d-flex ps-3 align-items-center'>
            <p className='bgm-fs--1 text-dark fw-bold m-0'>
              <span className='bgm-fs-1 text-primary'>6</span> Deployment
            </p>
          </DivStyed>
        </Col>

        <Col xs={12} md={6} className='p-3'>
          <DivStyed className='d-flex ps-3 align-items-center'>
            <p className='bgm-fs--1 text-dark fw-bold m-0'>
              <span className='bgm-fs-1 text-primary'>7</span> Maintenance
            </p>
          </DivStyed>
        </Col>
      </Row>
    </>
  )
}

export default DevelopmentProcessImage

const DivStyed = styled.div`
  height: 5rem;
  border: 3px solid var(--bs-primary);
  border-radius: 5%;
`
