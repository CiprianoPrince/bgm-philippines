import React from "react"
import { Link } from "react-router-dom"

import { Card, CardBody, CardHeader, CardText } from "reactstrap"
import styled from "styled-components"

const MeetTheTeamCard = ({
  cardImage,
  name,
  position,
  portfolio = "#",
  color = "white",
  textColor = "dark",
  borderColor = "gray",
}) => {
  return (
    <>
      <Link to={portfolio} target='_blank'>
        <CardStyled className='shadow'>
          <CardHeader className={`bg-${color}  border-0 px-5 py-3`}>
            <DivStyled className='d-block m-auto'>
              <ImgStyled
                className='img-fluid'
                src={cardImage}
                color={color}
                borderColor={borderColor}
                alt={cardImage}
              />
            </DivStyled>
          </CardHeader>
          <CardBody className={`bg-${color} border-0 px-5 py-5`}>
            <CardText className={`text-center text-${textColor}`}>
              <p className='bgm-fs-0 fw-bold mb-1 text-truncate'>{name}</p>
              <p className='fw-medium text-truncate'>
                <i>{position}</i>
              </p>
            </CardText>
          </CardBody>
        </CardStyled>
      </Link>
    </>
  )
}

export default MeetTheTeamCard

const CardStyled = styled(Card)`
  width: min(25rem, 100%) !important;
  margin-inline: auto;
`

const DivStyled = styled.div``

const ImgStyled = styled.img`
  border-radius: 50%;
  border: 5px solid;
  border-color: ${({ borderColor }) => `var(--bs-${borderColor})`};
`
