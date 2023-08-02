import React from "react"
import { Col, Row } from "reactstrap"
import {
  dockerWebp,
  laravelWebp,
  mariadbWebp,
  mysqlWebp,
  nodeWebp,
  nuxtjsWebp,
  phpWebp,
  pythonWebp,
  reactWebp,
  sassWebp,
  tailwindWebp,
  vueWebp,
} from "../../assets"
import styled from "styled-components"

const DevelopmentProcessImage = () => {
  return (
    <>
      <Row className='mb-0'>
        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={sassWebp} alt='sassWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={tailwindWebp} alt='tailwindWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={phpWebp} alt='phpWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={laravelWebp} alt='laravelWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={reactWebp} alt='reactWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={nodeWebp} alt='nodeWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={vueWebp} alt='vueWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={nuxtjsWebp} alt='nuxtjsWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={mysqlWebp} alt='mysqlWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={mariadbWebp} alt='mariadbWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={pythonWebp} alt='pythonWebp' />
        </Col>

        <Col
          xs={4}
          lg={2}
          className='d-flex justify-content-center align-items-center p-3'
        >
          <img className='img-fluid' src={dockerWebp} alt='dockerWebp' />
        </Col>
      </Row>
    </>
  )
}

export default DevelopmentProcessImage
