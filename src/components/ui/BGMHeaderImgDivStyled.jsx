import styled from "styled-components"

const HeaderImgDivStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 20rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.headerimg})`};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ afterbgcolor }) =>
      afterbgcolor === "light"
        ? "hsl(0, 0%, 90%, 0.35)"
        : "hsl(0, 0%, 10%, 0.70)"};
  }
`

HeaderImgDivStyled.defaultProps = {
  afterbgcolor: "light",
}

export default HeaderImgDivStyled
