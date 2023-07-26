import React from "react"
import { Button, Container } from "reactstrap"
import { pageNotFoundSvg } from "../assets/img"
import Stack from "../components/ui/BGMStack"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
const Error = () => {
  document.title = "Page not found"

  const navigate = useNavigate()

  console.log(" -----------------------------------------------------")
  console.log(navigate)
  console.log(" -----------------------------------------------------")

  return (
    <Container className='vh-100'>
      <Stack
        className='vh-100 justify-content-center align-content-center align-items-center'
        gap={3}
      >
        <img className='img-fluid' src={pageNotFoundSvg} alt='' />
        <p className='text-secondary'>
          The page you are looking for does not exist or another error occurred.
        </p>

        <Stack
          direction='horizontal'
          gap={3}
          className='justify-content-center'
        >
          <ErrorPageButtonStyled
            color='primary'
            outline
            className='fw-medium'
            onClick={() => navigate("/", { replace: true })}
          >
            Back to main page
          </ErrorPageButtonStyled>
          <Button
            color='primary'
            className='fw-medium text-light'
            onClick={() => navigate(-1, { replace: true })}
          >
            Back to previous page
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Error

const ErrorPageButtonStyled = styled(Button)`
  &:hover {
    color: var(--bs-light);
  }
  &:focus:active {
    color: var(--bs-light);
  }
`
