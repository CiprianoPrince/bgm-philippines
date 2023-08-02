import { HashLink } from "react-router-hash-link"
import styled from "styled-components"

const HashLinkStyled = styled(HashLink)`
  font-weight: bold;
  border: 2px solid;

  border-color: ${({ color }) => `var(--bs-${color})`};
  color: ${({ color, outline }) =>
    outline ? `var(--bs-${color})` : `var(--bs-white)`};
  background-color: ${({ color, outline }) =>
    outline ? `var(--bs-white)` : `var(--bs-${color})`};
  &:hover {
    color: ${({ color, outline }) =>
      outline ? `var(--bs-white)` : `var(--bs-${color})`};
    background-color: ${({ color, outline }) =>
      outline ? `var(--bs-${color})` : `var(--bs-white)`};
    border-color: ${({ color }) => `var(--bs-${color})`};
  }
  &:focus:active {
    color: ${({ color, outline }) =>
      outline ? `var(--bs-white)` : `var(--bs-${color})`};
    background-color: ${({ color, outline }) =>
      outline ? `var(--bs-${color})` : `var(--bs-white)`};
    border-color: ${({ color }) => `var(--bs-${color})`};
  }
`

export default HashLinkStyled
