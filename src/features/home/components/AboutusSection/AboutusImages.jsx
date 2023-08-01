import React from "react"
import styled from "styled-components"
import BGMStack from "../../../../components/ui/BGMStack"
import {
  buildingWebsiteSvg,
  soloBuildingWebsite1Svg,
  soloBuildingWebsite2Svg,
} from "../../assets"

const AboutusImages = () => {
  return (
    <>
      <BGMStack gap={2}>
        <DivStyled className='align-self-start'>
          <img
            className='img-fluid img-thumbnail bg-light'
            src={soloBuildingWebsite1Svg}
            alt='pair-coding'
          />
        </DivStyled>

        <DivStyled className='align-self-center'>
          <img
            className='img-fluid img-thumbnail  bg-light'
            src={buildingWebsiteSvg}
            alt='pair-coding'
          />
        </DivStyled>

        <DivStyled className='align-self-end'>
          <img
            className='img-fluid img-thumbnail  bg-dark'
            src={soloBuildingWebsite2Svg}
            alt='pair-coding'
          />
        </DivStyled>
      </BGMStack>
    </>
  )
}

export default AboutusImages

const DivStyled = styled.div`
  max-width: 15rem;
`
