import { Button, Col, Container, Row } from "reactstrap"
import pairCoding from "../assets/img/svg/pair-coding.svg"
import styled from "styled-components"

import {
  cultureWebp1,
  cultureWebp2,
  cultureWebp3,
  bgmWaveSvg3,
  bgmWaveSvg4,
  buildingWebsiteSvg,
  soloBuildingWebsite1Svg,
  soloBuildingWebsite2Svg,
} from "../assets/img"

import Stack from "../components/ui/BGMStack"
import BGMStack from "../components/ui/BGMStack"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

function Home() {
  document.title = "BGM Phillipines Inc. | Home"
  // TODO create hero page and add necessary content

  return (
    <>
      <HeroContainerStyled tag='section' fluid>
        <Row className='vh-100 flex-sm-row-reverse align-items-center align-content-center'>
          <Col xs={12} sm={6} className=''>
            <h1 className='fw-bold text-dark mb-3'>
              <span className='bgm-fs-5 d-block'>Code the Next </span>
              <span className='bgm-fs-5 d-block mb-3 text-primary'>
                Breakthrough!
              </span>
              <span className='bgm-fs-2 d-block'>Join Our Developer </span>
              <span className='bgm-fs-2 d-block'>Dream Team</span>
            </h1>
            <ButtonStyled color='primary' outline className='fw-bold'>
              Learn more
            </ButtonStyled>
          </Col>

          <Col xs={12} sm={6} className='text-center mt-5 mt-sm-0'>
            <img className='img-fluid' src={pairCoding} alt='pair-coding' />
          </Col>
        </Row>
      </HeroContainerStyled>

      <AboutContainerStyled tag='section' fluid className='bg-primary py-5'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} sm={6}>
              <h2 className='bgm-fs-4 text-light'>
                About <span className='text-dark'>BGM</span>
              </h2>
              <p className='bgm-fs-1 text-light fw-'>
                BGM is an onshore software development company with offices
                located in Makati, Quezon City, and Cebu City Philippines. We
                provide high-quality web applications using leading-edge
                technology to our Japan-based clients since 2023.
              </p>
            </Col>

            <Col xs={12} sm={6}>
              <Stack gap={2}>
                <DivStyled className='align-self-start'>
                  <img
                    className='img-fluid img-thumbnail bg-light'
                    src={soloBuildingWebsite1Svg}
                    alt='pair-coding'
                  />
                </DivStyled>
                <DivStyled className='align-self-center'>
                  <img
                    className='img-fluid img-thumbnail  bg-light'
                    src={buildingWebsiteSvg}
                    alt='pair-coding'
                  />
                </DivStyled>

                <DivStyled className='align-self-end'>
                  <img
                    className='img-fluid img-thumbnail  bg-dark'
                    src={soloBuildingWebsite2Svg}
                    alt='pair-coding'
                  />
                </DivStyled>
              </Stack>
            </Col>
          </Row>
        </Container>
      </AboutContainerStyled>

      <Container tag='section' className='py-5'>
        <BGMStack>
          <h2 className='bgm-fs-4 text-uppercase'>
            our <span className='text-primary'>culture</span>
          </h2>
          <Row className=''>
            <Col xs={12} lg={4}>
              <CultureDivStyled1 className='shadow p-2'>
                <p className='bgm-fs-2 fw-semibold text-primary text-uppercase m-0 z-1'>
                  fun and friendly work environment
                </p>

                <p className='bgm-fs--1 fw-semibold text-light m-0 z-1'>
                  We are more than just your coworkers. Our Team from different
                  levels of the organization: Japan Management, Team Leaders and
                  Engineers are all approachable and engaging. We promote and
                  maintain our camaraderie through our fun-filled company events
                  and engagement activities.
                </p>
              </CultureDivStyled1>
            </Col>
            <Col xs={12} lg={4}>
              <CultureDivStyled2 className='shadow p-2'>
                <p className='bgm-fs-2 fw-semibold text-primary text-uppercase m-0 z-1'>
                  endless learning opportunities
                </p>

                <p className='bgm-fs--1 fw-semibold text-light m-0 z-1'>
                  BGM supports its employees to continuously develop their
                  knowledge and skills within a collaborative working
                  environment, encourage them to share ideas, work and learn
                  from one another.
                </p>
              </CultureDivStyled2>
            </Col>
            <Col xs={12} lg={4}>
              <CultureDivStyled3 className='shadow p-2'>
                <p className='bgm-fs-2 fw-semibold text-primary text-uppercase m-0 z-1'>
                  distributed teams
                </p>

                <p className='bgm-fs--1 fw-semibold text-light m-0 z-1'>
                  BGM is a distributed team where Filipino members across the
                  country collaborate with members from over the nation. Some
                  members work remotely and some work on site in Makati, Quezon
                  City, and Cebu City .
                </p>
              </CultureDivStyled3>
            </Col>
          </Row>
        </BGMStack>
      </Container>

      <Container tag='section' className='py-5'>
        <Container>
          <h2 className='bgm-fs-4 text-uppercase'>employee testimonial</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img src={cultureWebp1} alt='test' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cultureWebp1} alt='test' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cultureWebp1} alt='test' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cultureWebp1} alt='test' />
            </SwiperSlide>
          </Swiper>
        </Container>
      </Container>
    </>
  )
}

export default Home

const HeroContainerStyled = styled(Container)`
  background-size: contain;
  background-image: url(${bgmWaveSvg3});
  background-position: 50% 100%;
  background-repeat: no-repeat;
`

const AboutContainerStyled = styled(Container)`
  background-size: contain;
  background-image: url(${bgmWaveSvg4});
  background-position: 50% 100%;
  background-repeat: no-repeat;
`

const ButtonStyled = styled(Button)`
  &:hover {
    color: var(--bs-light);
  }
  &:focus:active {
    color: var(--bs-light);
  }
`

const DivStyled = styled.div`
  max-width: 15rem;
`

const CultureDivStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  text-align: center;
  min-height: 20rem;
  border-radius: 3%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transition: all 250ms ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 3%;
    background-color: hsl(0, 0%, 95%, 0.75);
  }

  & :nth-child(2) {
    display: none;
  }

  &:hover {
    transform: scale(1.02);
    &::after {
      background-color: hsl(245, 17%, 29%, 0.75);
    }
    :nth-child(1) {
      display: none;
    }
    :nth-child(2) {
      display: block;
    }
  }
`

const CultureDivStyled1 = styled(CultureDivStyled)`
  background-image: url(${cultureWebp1});
`

const CultureDivStyled2 = styled(CultureDivStyled)`
  background-image: url(${cultureWebp2});
`

const CultureDivStyled3 = styled(CultureDivStyled)`
  background-image: url(${cultureWebp3});
`
