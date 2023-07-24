import React from "react"
import { Container } from "reactstrap"

const BGMContainer = ({ children, tag }) => {
  return <Container tag={tag}>{children}</Container>
}

export default BGMContainer
