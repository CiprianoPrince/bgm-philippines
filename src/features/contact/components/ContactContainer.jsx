import React from "react"
import ContactHeader from "./ContactHeader"
import { Col, Container, Row } from "reactstrap"
import ContactForm from "./ContactForm"
import BGMStack from "../../../components/ui/BGMStack"
import ContactFormTitle from "./ContactFormTitle"
import ContactImage from "./ContactImage"

const ContactContainer = () => {
  return (
    <>
      <Container fluid tag='section' className='p-0 mt-5'>
        <ContactHeader />

        <Container fluid className='p-5'>
          <Row className='flex-lg-row-reverse justify-content-center align-items-center align-content-center'>
            <Col xs={12} lg={6} className='p-3'>
              <BGMStack gap={5} className=''>
                <ContactFormTitle />
                <ContactForm />
              </BGMStack>
            </Col>

            <Col xs={12} lg={6} className='p-3 text-center'>
              <ContactImage />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default ContactContainer
