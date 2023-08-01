import React from "react"
import { Col, Container, Row } from "reactstrap"
import MissionText from "./MissionText"
import MissionTitle from "./MissionTitle"
import VisionTitle from "./VisionTitle"
import VisionText from "./VisionText"
import MissionVisionImage from "./MissionVisionImage"
import BGMStack from "../../../../components/ui/BGMStack"

const MissionVisionContainer = () => {
  return (
    <>
      <Container tag='section' className='my-5 p-5'>
        <Row>
          <Col xs={12} md={6}>
            <BGMStack gap={3} className='align-content-center'>
              <MissionTitle />
              <MissionText />
              <VisionTitle />
              <VisionText />
            </BGMStack>
          </Col>
          <Col xs={12} md={6}>
            <MissionVisionImage />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MissionVisionContainer
