import React, { memo } from "react"
import { Col, Container, Row } from "reactstrap"
import Stack from "../components/Bootstrap/Stack"
import { BiCurrentLocation, BiLaptop } from "react-icons/bi"

const BGMFooter = memo(() => {
  return (
    <footer>
      <Container
        fluid
        className='text-light p-3'
        style={{ backgroundColor: "hsl(0, 0%, 33%)" }}
      >
        <Container>
          <Row>
            <Col xs={12} lg={4} className='p-3'>
              <p className=''>
                <b>Philippines Office:</b>{" "}
              </p>
              <Stack direction='horizontal' gap={2}>
                <BiCurrentLocation className='fs-3' />
                <p className='m-0'>
                  on Toyo Bldg.6F, 1-6-2, Higashi-Ueno, Taito-ku, Tokyo
                  110-0015, Japan{" "}
                </p>
              </Stack>
              <Stack direction='horizontal' gap={2}>
                <BiLaptop className='fs-3' />
                <p className='m-0'>
                  on Toyo Bldg.6F, 1-6-2, Higashi-Ueno, Taito-ku, Tokyo
                  110-0015, Japan{" "}
                </p>
              </Stack>
            </Col>

            <Col xs={12} lg={4} className='p-3'>
              {" "}
              <p className=''>
                <b>Philippines Office:</b>{" "}
              </p>
              <Stack direction='horizontal' gap={2}>
                <BiCurrentLocation className='fs-3' />
                <p className='m-0'>
                  on Toyo Bldg.6F, 1-6-2, Higashi-Ueno, Taito-ku, Tokyo
                  110-0015, Japan{" "}
                </p>
              </Stack>
              <Stack direction='horizontal' gap={2}>
                <BiLaptop className='fs-3' />
                <p className='m-0'>
                  on Toyo Bldg.6F, 1-6-2, Higashi-Ueno, Taito-ku, Tokyo
                  110-0015, Japan{" "}
                </p>
              </Stack>
            </Col>

            <Col xs={12} lg={4} className='p-3'>
              {" "}
              <p className=''>
                <b>Philippines Office:</b>{" "}
              </p>
              <Stack direction='horizontal' gap={2}>
                <BiCurrentLocation className='fs-3' />
                <p className='m-0'>
                  on Toyo Bldg.6F, 1-6-2, Higashi-Ueno, Taito-ku, Tokyo
                  110-0015, Japan{" "}
                </p>
              </Stack>
              <Stack direction='horizontal' gap={2}>
                <BiLaptop className='fs-3' />
                <p className='m-0'>
                  on Toyo Bldg.6F, 1-6-2, Higashi-Ueno, Taito-ku, Tokyo
                  110-0015, Japan{" "}
                </p>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className='text-center'>
        <p className='m-3'>
          Copyright &copy; 2023 BGM Philippines Inc. All Rights Reserved.
        </p>
      </Container>
    </footer>
  )
})

export default BGMFooter
