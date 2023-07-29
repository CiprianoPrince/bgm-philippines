import React from "react"
import { Container } from "reactstrap"

const BGMAdminMain = ({ children }) => {
  return (
    <Container fluid tag='main' className=' p-0'>
      {children}
    </Container>
  )
}

export default BGMAdminMain
