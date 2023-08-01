import React from "react"
import { Container } from "reactstrap"
import BGMStack from "../../../../components/ui/BGMStack"
import OurCultureTitle from "./OurCultureTitle"
import OurCultureImages from "./OurCultureImages"

const OurCultureContainer = () => {
  return (
    <>
      <Container tag='section' className='py-5 my-5'>
        <BGMStack>
          <OurCultureTitle />
          <OurCultureImages />
        </BGMStack>
      </Container>
    </>
  )
}

export default OurCultureContainer
