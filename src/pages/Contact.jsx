import React from "react"
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"
import styled from "styled-components"
import { contactUsHeaderImgJpg, messageSentSvg } from "../assets/img"
import BGMStack from "../components/ui/BGMStack"

const Contact = () => {
  document.title = "BGM Phillipines Inc. | Contact us"
  return (
    <Container fluid tag='section' className='p-0 mt-5'>
      <HeaderImgDivStyled>
        <Container className='z-1'>
          <h1 className='bgm-fs-5 fw-medium text-light'>Contact us</h1>
        </Container>
      </HeaderImgDivStyled>

      <Container fluid className='p-5'>
        <Row className='flex-lg-row-reverse align-items-center'>
          <Col xs={12} lg={6}>
            <BGMStackStyled gap={5}>
              <h2 className='bgm-fs-3'>Let us know your concerns!</h2>

              <Form>
                <FormGroup>
                  <Label for='exampleEmail'>Your Full Name</Label>
                  <Input />
                  <FormFeedback>Sweet! that name is available</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for='examplePassword'>Your Email</Label>
                  <Input />
                  <FormFeedback>
                    Oh noes! that name is already taken
                  </FormFeedback>
                </FormGroup>

                <FormGroup className='position-relative'>
                  <Label for='examplePassword'>Your Phone Number</Label>
                  <Input />
                  <FormFeedback>
                    Oh noes! that name is already taken
                  </FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for='exampleText'>Your Message</Label>
                  <Input id='exampleText' name='text' type='textarea' />
                </FormGroup>

                <Button color='primary' className='d-block text-light ms-auto'>
                  Send message
                </Button>
              </Form>
            </BGMStackStyled>
          </Col>

          <Col xs={12} lg={6}>
            <img
              className='img-fluid'
              src={messageSentSvg}
              alt='message sent svg'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Contact

const HeaderImgDivStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 20rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${contactUsHeaderImgJpg});

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 95%, 0.5);
  }
`
const BGMStackStyled = styled(BGMStack)`
  max-width: 40rem;
`
