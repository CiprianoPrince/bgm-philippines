import React from "react"
import { Container } from "reactstrap"

const BGMMain = ({ children }) => {
  return (
    <Container fluid tag='main' className="p-0">
      {children}
    </Container>
  )
}

export default BGMMain
