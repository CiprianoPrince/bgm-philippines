import React from "react"
import { Container } from "reactstrap"

const BGMContainerFluid = ({ children, tag }) => {
  return (
    <Container fluid tag={tag}>
      {children}
    </Container>
  )
}

export default BGMContainerFluid
