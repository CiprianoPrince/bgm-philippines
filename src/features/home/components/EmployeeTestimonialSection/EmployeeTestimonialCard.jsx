import React from "react"

import { Card, CardBody, CardFooter, CardHeader, CardText } from "reactstrap"
import { annieWebp } from "../../../../assets"
import styled from "styled-components"

const EmployeeTestimonialCard = () => {
  return (
    <>
      <CardStyled className='shadow'>
        <CardHeader className='bg-white border-0 px-5 py-3'>
          <DivStyled className='d-inline-block'>
            <ImgStyled className='img-fluid' src={annieWebp} alt='annieWebp' />
          </DivStyled>
        </CardHeader>
        <CardBody className='bg-white border-0 px-5 py-3'>
          <CardText>
            "I got to learn new stacks and technology. Management is trying its
            best to improve and listen to employees needs and suggestions. The
            people are friendly and approachable."
          </CardText>
        </CardBody>
        <CardFooter className=' bg-white border-0 px-5 py-3'>
          Annie, Mid Software Engineer
        </CardFooter>
      </CardStyled>
    </>
  )
}

export default EmployeeTestimonialCard

const CardStyled = styled(Card)`
  width: 25rem !important;
  margin-inline: auto;
`

const DivStyled = styled.div`
  width: 10rem;
`

const ImgStyled = styled.img`
  border-radius: 50%;
  border: 3px solid var(--bs-primary);
`
