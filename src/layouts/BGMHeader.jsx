import React, { memo } from "react"

import { Container } from "reactstrap"
import BGMNav from "./BGMNav/BGMNav"
import BGMSideNav from "./BGMSideNav/BGMSideNav"

const BGMHeader = memo(() => {
  return (
    <>
      <Container
        fluid
        tag='header'
        className='sticky-top p-0'
        style={{ backgroundColor: "hsl(106, 65%, 90%)" }}
      >
        <BGMNav />
        <BGMSideNav />
      </Container>
    </>
  )
})

export default BGMHeader
