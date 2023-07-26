import React from 'react'
import contactUsHeaderImg from "../assets/img/con1.png"
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div>
      <br /><br /><br /><br /><br />
      <Card inverse>
            <CardImg
            alt="Card image cap"
            src={contactUsHeaderImg}
            style={{height: 270}}
            width="100%"
            />
            <CardImgOverlay>
                <CardTitle tag="h1" className="p-5 my-5">
                    Contact Us
                </CardTitle>
            </CardImgOverlay>
        </Card>

    <div className='d-flex'>
     {/* <div className="container h-100 justify-content-start align-items-start mt-5 " style={{width: "500px"}}> */}
    <div className='col-6 h-100 justify-content-center p-5' style={{width: '600px'}}>
      <h2 className="mb-5 my-5 ps-5">Let us know your concerns!
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Your Full Name*
          </label>
          <input className="form-control" type="text" id="name" placeholder='Your name' required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
          Your Email*
          </label>
          <input className="form-control" type="email" id="email" placeholder='Your email address' required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="number">
          Your Phone Number*
          </label>
          <input className="form-control" type="number" id="number" placeholder='+639-111-111-111' required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
          Your Message*
          </label>
          <textarea className="form-control" id="message" placeholder='Your message' required />
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">I agree to the Privacy Policy.</label>
        </div>
        <button type="Submit" className="btn btn-outline-danger my-3" data-mdb-ripple-color="dark">Submit</button>
      </form>
    </div> <br />
    {/* <div className="row">
  <div className="col-6">.col-6</div>
  <div className="col-6">
    <h1>BE PART OF</h1>
    <h1>OUR TEAM!</h1>
  </div>
</div> */}

    </div> 
    </div>
  )
}
export default ContactForm