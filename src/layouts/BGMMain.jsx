import React from "react"
import { Container } from "reactstrap"

const BGMMain = ({ children }) => {
  return (
    <Container fluid tag='main'>
      {children}
    </Container>
  )
}

export default BGMMain
