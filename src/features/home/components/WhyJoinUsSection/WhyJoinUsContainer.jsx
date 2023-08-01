import React from "react"
import WhyJoinUsTitle from "./WhyJoinUsTitle"
import { Col, Container, Row } from "reactstrap"

const WhyJoinUsContainer = () => {
  return (
    <>
      <Container tag='section' className='py-5 my-5'>
        <Row>
          <Col xs={12} md={6} className='p-3'>
            <WhyJoinUsTitle />
          </Col>

          <Col xs={12} md={6} className='p-3'>
            {/* <img
              className='img-fluid img-thumbnail'
              src={cultureWebp1}
              alt='arsar'
            /> */}
          </Col>

          <Col xs={12} md={6} className='p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              Good Compensation and Benefits
            </h3>

            <p className='text-gray'>
              We recognize your efforts through performance-based incentives and
              salary increase. We are also committed to continuously improve the
              benefits package that you deserve.
            </p>
          </Col>

          <Col xs={12} md={6} className='p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              Promotes Employee Growth
            </h3>

            <p className='text-gray'>
              As the company grows, our employees grow with it as well. As part
              of company’s commitment to our employees advancement, we provide
              various opportunities for growth and development, career-wise and
              skill-wise.
            </p>
          </Col>

          <Col xs={12} md={6} className='p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>Future Ready</h3>

            <p className='text-gray'>
              Our organization keeps up to date with the latest technological
              trends. Sharing new ideas is actively encouraged in our
              collaborative and team-oriented environment. We shape, prepare and
              look forward for the future of technology.
            </p>
          </Col>

          <Col xs={12} md={6} className='p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              Efficient Training Experience
            </h3>

            <p className='text-gray'>
              We provide a holistic technical training experience for you to be
              prepared for your future projects. You will also work with and
              will be guided by our approachable and experienced trainers.
              During your training, you will learn about the company’s work
              culture, best practices, technologies and tools that the
              development teams are using.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WhyJoinUsContainer
