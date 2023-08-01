import React from "react"
import { Col, Row } from "reactstrap"
import styled from "styled-components"

const CoreValuesText = () => {
  return (
    <>
      <Row>
        <ColStyled xs={12} md={6} className='pe-5'>
          <div className='py-3'>
            <h3 className='bgm-fs-1 fw-semibold'>We strive for excellence</h3>
            <p className='bgm-fs-0 text-dark'>
              We give the best quality and efficiency in all aspects of the
              business to reach or exceed the targets and expectations.
            </p>
          </div>

          <div className='py-3'>
            <h3 className='bgm-fs-1 fw-semibold'>We are committed</h3>
            <p className='bgm-fs-0 text-dark'>
              We promise good delivery from start to finish and maintain a high
              level of reliability and accountability.
            </p>
          </div>
          <div className='py-3'>
            <h3 className='bgm-fs-1 fw-semibold'>We have integrity</h3>
            <p className='bgm-fs-0 text-dark'>
              We give the best quality and efficiency in all aspects of the
              business to reach or exceed the targets and expectations.
            </p>
          </div>
        </ColStyled>
        <Col xs={12} md={6} className='ps-md-5'>
          <div className='py-3'>
            <h3 className='bgm-fs-1 fw-semibold'>We are flexible</h3>
            <p className='bgm-fs-0 text-dark'>
              We view a situation, problem or opportunity from multiple
              perspectives and develop alternative solutions to project issues.
            </p>
          </div>
          <div className='py-3'>
            <h3 className='bgm-fs-1 fw-semibold'>We are innovative</h3>
            <p className='bgm-fs-0 text-dark'>
              We will continue to find ways to always adapt to the never-ending
              changes in the technology, hence, bringing fresh concepts and new
              solutions that will add tremendous value to the business.
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CoreValuesText

const ColStyled = styled(Col)`
  position: relative;
  &::after {
    display: none;
  }
  @media screen and (min-width: 768px) {
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      width: 1px;
      top: 0;
      right: 0;
      background-color: var(--bs-primary);
    }
  }
`
