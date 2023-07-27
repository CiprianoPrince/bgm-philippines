import React, { memo } from "react"
import styled from "styled-components"

import { Col, Navbar } from "reactstrap"

import BGMLogo from "./BGMLogo"

import BGMNavLinkList from "./BGMNavLinkList"
import BGMNavButton from "./BGMNavButton"

const BGMNav = () => {
  return (
    <>
      <Navbar container='fluid p-0' expand='md' className='bg-light p-0'>
        <Col md={2} lg={4} className='bg-light'>
          <BGMLogo />
        </Col>

        <ColStyled md={10} lg={8} className=''>
          <BGMNavButton />

          <BGMNavLinkList />
        </ColStyled>
      </Navbar>
    </>
  )
}

export default BGMNav

const ColStyled = styled(Col)`
  background-color: transparent !important;
  padding: 1rem !important;
  @media only screen and (min-width: 768px) {
    background-color: var(--bs-primary) !important;
    padding: 0rem !important;
  }
`
