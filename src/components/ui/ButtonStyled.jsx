import { Button } from "reactstrap"
import styled from "styled-components"

const ButtonStyled = styled(Button)`
  border: 2px solid;
  color: ${({ color, outline }) =>
    outline ? `var(--bs-${color})` : `var(--bs-white)`};
  &:hover {
    color: ${({ color, outline }) =>
      outline ? `var(--bs-white)` : `var(--bs-${color})`};
    background-color: ${({ color, outline }) =>
      outline ? `var(--bs-${color})` : `var(--bs-white)`};
  }
  &:focus:active {
    color: ${({ color, outline }) =>
      outline ? `var(--bs-white)` : `var(--bs-${color})`};
    background-color: ${({ color, outline }) =>
      outline ? `var(--bs-${color})` : `var(--bs-white)`};
  }
`

export default ButtonStyled
