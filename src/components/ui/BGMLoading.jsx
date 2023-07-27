import React from "react"
import { createPortal } from "react-dom"
import { Spinner } from "reactstrap"
import styled from "styled-components"

const BGMLoading = () => {
  return createPortal(
    <>
      <BGMLoadingStyled className='vh-100 d-flex justify-content-center align-items-center'>
        <Spinner
          size='md'
          color='primary'
          style={{
            height: "5rem",
            width: "5rem",
          }}
        />
      </BGMLoadingStyled>
    </>,
    document.getElementById("loading")
  )
}

export default BGMLoading

const BGMLoadingStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1200;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 95%);
	  }
`
