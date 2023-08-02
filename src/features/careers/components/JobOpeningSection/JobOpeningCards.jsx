import React from "react"
import { Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
import styled from "styled-components"

const JobOpeningCards = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={6} className='p-3'>
          <div className='shadow p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-truncate mb-3'>
              Jr. Software Engineer
            </h3>
            <Row direction='horizontal'>
              <ColStyled xs={6}>
                <p className='bgm-fs-0 mb-0 me-auto text-truncate'>Full Time</p>
              </ColStyled>

              <Col xs={6}>
                <p className='bgm-fs-0 mb-0 text-end text-truncate'>
                  {" "}
                  9:00am~5:30pm
                </p>
              </Col>
            </Row>
            <Link className='d-block text-end mt-3'>View Details</Link>
          </div>
        </Col>

        <Col xs={12} lg={6} className='p-3'>
          <div className='shadow p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-truncate mb-3'>
              Software Engineer
            </h3>
            <Row direction='horizontal'>
              <ColStyled xs={6}>
                <p className='bgm-fs-0 mb-0 me-auto text-truncate'>Full Time</p>
              </ColStyled>

              <Col xs={6}>
                <p className='bgm-fs-0 mb-0 text-end text-truncate'>
                  9:00am~5:30pm
                </p>
              </Col>
            </Row>
            <Link className='d-block text-end mt-3'>View Details</Link>
          </div>
        </Col>

        <Col xs={12} lg={6} className='p-3'>
          <div className='shadow p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-truncate mb-3'>
              Mid Software Engineer
            </h3>
            <Row direction='horizontal'>
              <ColStyled xs={6}>
                <p className='bgm-fs-0 mb-0 me-auto text-truncate'>Full Time</p>
              </ColStyled>

              <Col xs={6}>
                <p className='bgm-fs-0 mb-0 text-end text-truncate'>
                  {" "}
                  9:00am~5:30pm
                </p>
              </Col>
            </Row>
            <Link className='d-block text-end mt-3'>View Details</Link>
          </div>
        </Col>

        <Col xs={12} lg={6} className='p-3'>
          <div className='shadow p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-truncate mb-3'>
              Sr. Software Engineer
            </h3>
            <Row direction='horizontal'>
              <ColStyled xs={6}>
                <p className='bgm-fs-0 mb-0 me-auto text-truncate'>Full Time</p>
              </ColStyled>

              <Col xs={6}>
                <p className='bgm-fs-0 mb-0 text-end text-truncate'>
                  {" "}
                  9:00am~5:30pm
                </p>
              </Col>
            </Row>
            <Link className='d-block text-end mt-3'>View Details</Link>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default JobOpeningCards

const ColStyled = styled(Col)`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: var(--bs-primary);
  }
`
