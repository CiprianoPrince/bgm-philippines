import React from "react"
import HashLinkStyled from "../../../../components/ui/HashLinkStyled"

const HeroButton = () => {
  return (
    <>
      <HashLinkStyled
        to='careers#JobOpening'
        color='secondary'
        outline
        className='btn fw-bold'
      >
        Learn more
      </HashLinkStyled>
    </>
  )
}

export default HeroButton
