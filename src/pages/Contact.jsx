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
  Spinner,
} from "reactstrap"
import styled from "styled-components"
import { contactUsHeaderImgJpg, messageSentSvg } from "../assets/img"
import BGMStack from "../components/ui/BGMStack"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import HeaderImgDivStyled from "../components/ui/BGMHeaderImgDivStyled"

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.number(),
  message: z.string(),
})

const Contact = () => {
  document.title = "BGM Phillipines Inc. | Contact us"

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const { errors } = formState

  const handleSave = (formValues) => {
    console.log(formValues)
  }

  const registerRs = (fieldName, options = {}) => {
    const registeredField = register(fieldName, options)
    const ref = registeredField.ref
    delete registeredField.ref
    return { ...registeredField, innerRef: ref }
  }

  return (
    <Container fluid tag='section' className='p-0 mt-5'>
      <HeaderImgDivStyled headerimg={contactUsHeaderImgJpg}>
        <Container className='z-1'>
          <h1 className='bgm-fs-5 fw-medium text-light'>Contact us</h1>
        </Container>
      </HeaderImgDivStyled>

      <Container fluid className='p-5'>
        <Row className='flex-lg-row-reverse justify-content-center align-items-center align-content-center'>
          <Col xs={12} lg={6} className='p-3'>
            <BGMStack gap={5} className=''>
              <h2 className='bgm-fs-3 mx-auto'>Let us know your concerns!</h2>

              <FormStyled
                className='mx-auto'
                onSubmit={handleSubmit(handleSave)}
                onReset={reset}
              >
                <FormGroup>
                  <Label for='name'>Your Full Name</Label>
                  <Input {...registerRs("name")} placeholder='Your name' />
                  <Label for='exampleEmail'>Your Full Name</Label>
                  <Input />
                  <FormFeedback>Sweet! that name is available</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for='email'>Your Email</Label>
                  <Input
                    {...registerRs("email")}
                    placeholder='Your email address'
                  />
                  <Label for='examplePassword'>Your Email</Label>
                  <Input />
                  <FormFeedback>
                    Oh noes! that name is already taken
                  </FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for='phone'>Your Phone Number</Label>
                  <Input
                    {...registerRs("phone")}
                    placeholder='Your phone number'
                  />
                </FormGroup>

                <FormGroup className='position-relative'>
                  <Label for='examplePassword'>Your Phone Number</Label>
                  <Input />
                  <FormFeedback>
                    Oh noes! that name is already taken
                  </FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for='message'>Your Message</Label>
                  <Input
                    type='textarea'
                    {...registerRs("message")}
                    placeholder='Your message'
                  />
                  <Label for='exampleText'>Your Message</Label>
                  <Input id='exampleText' name='text' type='textarea' />
                </FormGroup>

                <Button
                  type='submit'
                  color='primary'
                  className='d-block text-light ms-auto'
                >
                  <span className='me-1'>
                    <Spinner size='sm' className='p-1' /> Send
                  </span>
                  message
                </Button>
              </FormStyled>
            </BGMStack>
          </Col>

          <Col xs={12} lg={6} className='p-3 text-center'>
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

const FormStyled = styled(Form)`
  width: min(35rem, 100%);
`
