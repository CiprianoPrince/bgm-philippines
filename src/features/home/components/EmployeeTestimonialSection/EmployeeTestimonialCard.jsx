import React from "react"

import { Card, CardBody, CardFooter, CardHeader, CardText } from "reactstrap"
import { annieWebp } from "../../../../assets"
import styled from "styled-components"

const EmployeeTestimonialCard = ({ name, position, image, testimonial }) => {
  return (
    <>
      <CardStyled className='shadow'>
        <CardHeader className='bg-white border-0 px-5 py-3'>
          <DivStyled className='d-inline-block'>
            <ImgStyled className='img-fluid' src={image} alt='annieWebp' />
          </DivStyled>
        </CardHeader>
        <CardBody className='bg-white border-0 px-5 py-3'>
          <CardText>{`${testimonial}`}</CardText>
        </CardBody>
        <CardFooter className=' bg-white border-0 px-5 py-3'>
          {`${name}, ${position}`}
        </CardFooter>
      </CardStyled>
    </>
  )
}

export default EmployeeTestimonialCard

const CardStyled = styled(Card)`
  width: 25rem !important;
  height: 30rem !important;
  margin-inline: auto;
`

const DivStyled = styled.div`
  width: 10rem;
`

const ImgStyled = styled.img`
  border-radius: 50%;
  border: 3px solid var(--bs-primary);
`
