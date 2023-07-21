import React from "react"
import { Container } from "reactstrap"

function PageContainer({ children }) {
  return (
    <Container fluid tag='main' style={{ height: "5000px" }}>
      {children}
    </Container>
  )
}

export default PageContainer
