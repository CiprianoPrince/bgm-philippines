import { Container } from "reactstrap"
import styled from "styled-components"

const ContainerWithImgStyled = styled(Container)`
  ${({ bgImage }) =>
    bgImage
      ? `background-size: contain;
  background-image: url(${bgImage});
  background-position: 50% 100%;
  background-repeat: no-repeat;`
      : ``}
`
export default ContainerWithImgStyled
