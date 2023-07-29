import React, { memo } from "react"

import { Container } from "reactstrap"

const BGMAdminHeader = memo(() => {
  return (
    <>
      <Container
        fluid
        tag='header'
        className='fixed-top bg-primary p-0'
        style={{ minHeight: "80px" }}
      ></Container>
    </>
  )
})

export default BGMAdminHeader
