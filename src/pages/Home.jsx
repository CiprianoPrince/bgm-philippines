import { Button, Col, Container, Row } from "reactstrap"

import styled from "styled-components"

import {
  bgmWaveSvg3,
  bgmWaveSvg4,
  cultureWebp1,
  cultureWebp2,
  cultureWebp3,
  buildingWebsiteSvg,
  soloBuildingWebsite1Svg,
  soloBuildingWebsite2Svg,
  teamSpiritSvg,
  trainingExperienceJpg,
  duoCodingSvg,
} from "../assets/img"

import Stack from "../components/ui/BGMStack"
import BGMStack from "../components/ui/BGMStack"

import HeaderImgDivStyled from "../components/ui/BGMHeaderImgDivStyled"

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
      <HeroContainerStyled tag='section' fluid='true'>
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
            <img className='img-fluid' src={duoCodingSvg} alt='pair-coding' />
          </Col>
        </Row>
      </HeroContainerStyled>

      <AboutContainerStyled
        tag='section'
        fluid='true'
        className='bg-primary py-5'
      >
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} sm={6}>
              <h2 className='bgm-fs-3 text-light text-uppercase'>
                about <span className='text-dark'>bgm</span>
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

      <Container tag='section' className='py-5 my-5'>
        <BGMStack>
          <h2 className='bgm-fs-3 text-uppercase'>
            our <span className='text-primary'>culture</span>
          </h2>

          <Row>
            <Col xs={12} lg={4} className='my-2'>
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

            <Col xs={12} lg={4} className='my-2'>
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

            <Col xs={12} lg={4} className='my-2'>
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

      <Container fluid tag='section' className='py-5 my-5 bg-primary'>
        <Container className='text-center'>
          <h2 className='bgm-fs-3 mb-5 text-light text-uppercase'>
            employee testimonial
          </h2>

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

      <Container tag='section' className='py-5 my-5'>
        <Row>
          <Col xs={12} md={6} className='p-3'>
            <h2 className='bgm-fs-3'>WHY YOU SHOULD JOIN US?</h2>
          </Col>
          <Col xs={12} md={6} className='p-3'>
            {/* <img
              className='img-fluid img-thumbnail'
              src={cultureWebp1}
              alt='arsar'
            />    */}
          </Col>
          <Col xs={12} md={6} className='p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              Good Compensation and Benefits
            </h3>
            <p className='text-secondary'>
              We recognize your efforts through performance-based incentives and
              salary increase. We are also committed to continuously improve the
              benefits package that you deserve.
            </p>
          </Col>
          <Col xs={12} md={6} className='p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              Promotes Employee Growth
            </h3>
            <p className='text-secondary'>
              As the company grows, our employees grow with it as well. As part
              of company’s commitment to our employees advancement, we provide
              various opportunities for growth and development, career-wise and
              skill-wise.
            </p>
          </Col>
          <Col xs={12} md={6} className='p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>Future Ready</h3>
            <p className='text-secondary'>
              Our organization keeps up to date with the latest technological
              trends. Sharing new ideas is actively encouraged in our
              collaborative and team-oriented environment. We shape, prepare and
              look forward for the future of technology.
            </p>
          </Col>
          <Col xs={12} md={6} className='p-3'>
            <h3 className='bgm-fs-1 fw-semibold text-primary'>
              Efficient Training Experience
            </h3>
            <p className='text-secondary'>
              We provide a holistic technical training experience for you to be
              prepared for your future projects. You will also work with and
              will be guided by our approachable and experienced trainers.
              During your training, you will learn about the company’s work
              culture, best practices, technologies and tools that the
              development teams are using.
            </p>
          </Col>
          <Col xs={12} md={6} className='p-3'></Col>
        </Row>
      </Container>

      <Container tag='section' className='py-5'>
        <Row>
          <Col xs={12} lg={6} className='p-3'>
            <img className='img-fluid' src={teamSpiritSvg} alt='cultureWebp1' />
          </Col>

          <Col xs={12} lg={6} className='p-3'>
            <h2 className='bgm-fs-4'>
              EMPLOYEE <span className='text-primary'>BENEFITS</span>
            </h2>
            <p className='bgm-fs-1'>HMO (Medical & Dental Coverage)</p>
            <p className='bgm-fs-1'>Performance-Based Salary Increase</p>
            <p className='bgm-fs-1'>Flexible Work Setup</p>
            <BenefitButtonStyled color='primary' outline>
              View more benefits
            </BenefitButtonStyled>
          </Col>
        </Row>
      </Container>

      <HeaderImgDivStyled
        fluid
        afterbgcolor='dark'
        headerimg={trainingExperienceJpg}
        tag='section'
        className='py-5 my-5 bg-primary'
      >
        <Container className='text-center z-1'>
          <h2 className='bgm-fs-3 mb-5 text-light text-uppercase'>
            training experience
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
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
      </HeaderImgDivStyled>

      <Container tag='section' className='py-5'>
        <Row>
          <Col xs={12} lg={6} className='p-3'>
            <h2 className='bgm-fs-4'>
              EMPLOYEE <span className='text-primary'>BENEFITS</span>
            </h2>
            <p className='bgm-fs-1'>HMO (Medical & Dental Coverage)</p>
            <p className='bgm-fs-1'>Performance-Based Salary Increase</p>
            <p className='bgm-fs-1'>Flexible Work Setup</p>
            <BenefitButtonStyled color='primary' outline>
              View more benefits
            </BenefitButtonStyled>
          </Col>

          <Col xs={12} lg={6} className='p-3'>
            <img className='img-fluid' src={teamSpiritSvg} alt='cultureWebp1' />
          </Col>
        </Row>
      </Container>

      <Container tag='section' className='py-5'>
        <Row className='flex-sm-row-reverse'>
          <Col xs={12} lg={6} className='p-3'>
            <h2 className='bgm-fs-4'>
              EMPLOYEE <span className='text-primary'>BENEFITS</span>
            </h2>
            <p className='bgm-fs-1'>HMO (Medical & Dental Coverage)</p>
            <p className='bgm-fs-1'>Performance-Based Salary Increase</p>
            <p className='bgm-fs-1'>Flexible Work Setup</p>
            <BenefitButtonStyled color='primary' outline>
              View more benefits
            </BenefitButtonStyled>
          </Col>

          <Col xs={12} lg={6} className='p-3'>
            <img className='img-fluid' src={teamSpiritSvg} alt='cultureWebp1' />
          </Col>
        </Row>
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

const BenefitButtonStyled = styled(Button)`
  color: var(--bs-primary);
  &:hover {
    color: var(--bs-light);
  }

  &:active:focus {
    color: var(--bs-light);
  }
`
