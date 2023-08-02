import React from "react"
import MeetTheTeamCard from "../../../../components/MeetTheTeamSection/MeetTheTeamCard"
import { Col, Row } from "reactstrap"
import {
  angeloWebp,
  annieWebp,
  glennWebp,
  iggyWebp,
  melvinWebp,
  princeWebp,
} from "../../../../assets"
import styled from "styled-components"

const MeetTheTeamImages = () => {
  return (
    <>
      <Row>
        <ColStyled xs={12} md={6} lg={4} xl={3} className='mb-3'>
          <MeetTheTeamCardStyled
            cardImage={annieWebp}
            name='Annie Neshreen'
            position='Sr. Software Engineer'
          />
        </ColStyled>

        <ColStyled xs={12} md={6} lg={4} xl={3} className='mb-3'>
          <MeetTheTeamCardStyled
            cardImage={angeloWebp}
            name='John Angelo David'
            position='Mid Software Engineer'
          />
        </ColStyled>

        <ColStyled xs={12} md={6} lg={4} xl={3} className='mb-3'>
          <MeetTheTeamCardStyled
            cardImage={princeWebp}
            name='Prince Cipriano'
            position='Jr. Software Engineer'
          />
        </ColStyled>

        <ColStyled xs={12} md={6} lg={4} xl={3} className='mb-3'>
          <MeetTheTeamCardStyled
            cardImage={iggyWebp}
            name='Raja Iggy'
            position='Sr. Web Developer'
          />
        </ColStyled>

        <ColStyled xs={12} md={6} lg={4} xl={3} className='mb-3'>
          <MeetTheTeamCardStyled
            cardImage={melvinWebp}
            name='Melvin Alas'
            position='Jr. Software Engineer'
            portfolio='https://melvinxvi.github.io/Eportfolio/'
          />
        </ColStyled>

        <ColStyled xs={12} md={6} lg={4} xl={3} className='mb-3'>
          <MeetTheTeamCardStyled
            cardImage={glennWebp}
            name='Glenn Evangelista'
            position='Web Developer'
            portfolio='https://glennmarquez28.github.io/E-Portfolio/'
          />
        </ColStyled>
      </Row>
    </>
  )
}

export default MeetTheTeamImages

const ColStyled = styled(Col)`
  transition: all 250ms ease-in-out;
  & img {
    transition: all 250ms ease-in-out;
    border-color: var(--bs-light);
  }

  &:hover {
    transform: scale(1.03);
    img {
      border-color: var(--bs-primary);
    }
  }
  @media screen {
  }
`

const MeetTheTeamCardStyled = styled(MeetTheTeamCard)`
  min-height: 30rem;
`
