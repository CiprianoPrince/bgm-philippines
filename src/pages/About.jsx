import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import aboutUsHeaderImg from "../assets/img/about4.jpg"
import visionImg from "../assets/img/vision4.avif"
import pImg from "../assets/img/p.webp"
import mImg from "../assets/img/m.png"
import gImg from "../assets/img/g.avif"
import teamImg from "../assets/img/team.jpg"


function About() {
  return (
    <div className='container-fluid'>
      
        <Card inverse>
            <CardImg
            alt="Card image cap"
            src={aboutUsHeaderImg}
            style={{height: 270}}
            width="100%"
            />
            <CardImgOverlay>
                <CardTitle tag="h1" className="p-5 ">
                    About Us
                </CardTitle>
            </CardImgOverlay>
        </Card>
        <div className='container p-4'>

            <h1  className='p-4'>COMPANY OVERVIEW</h1>
            <p>
            PGM Philipines Inc. is a leading global outsourcing company that specializes in providing a wide range of high-quality 
            and cost-effective outsourcing services to businesses across various industries. Established in May 27, 2023. </p>
            <p>
            PGM Philipines Inc. has built a reputation for excellence, innovation, and reliability, serving as a trusted partner for companies
            seeking to optimize their operations and enhance their competitive edge.
            </p>
            <p>
            We train and support our employees to achieve their highest level of performance so we can fulfill our mission to provide high quality
            software development services to our clients that will make their business processes easier and more efficient.
            </p>
            <p>
            Our goal is to continue being a management that keeps the business grow and continuously maintains and improves the quality of
            lives of our employees and clients.
            </p>
        </div>
        <div className="row p-4">
            <div className="col-6">
            <h1 className='p-4'>MISSION</h1>
            <p>
            To provide cost-effective and high-quality IT solutions that best define the requirements of our clients while ensuring 
            that we continue to provide career and skill advancement opportunities to our employees.
            </p>
            <h1 className='p-4'>VISION</h1>
            <p>
            To be the most trusted outsourcing IT company that markets one-stop software development services globally
            and provides more job opportunities to Filipino people.
            </p>
            </div>
            <div className="col-6"> <img src={visionImg} alt="visionImg" width={700}/>
           
            </div>
        </div>
        <div className="row">
            <h1 className='p-4'>OUR CORE VALUES</h1>
            <div className="col-6">
                <p><b>We strive for excellence.</b></p>
                <p>We give the best quality and efficiency in all aspects of the business to reach or exceed the targets and expectations.</p>
                <p><b>We are committed</b></p>
                <p>We promise good delivery from start to finish and maintain a high level of reliability and accountability.</p>
                <p><b>We have integrity.</b></p>
                <p>We always do what is right, even if, and especially if no one is looking.</p>
            
            </div>
            <div className="col-6">
                <p><b>We are flexible.</b></p>
                <p>We view a situation, problem or opportunity from multiple perspectives and develop alternative solutions to project issues.</p>
                <p><b>We are innovative.</b></p>
                <p>We will continue to find ways to always adapt to the never-ending changes in the technology, hence, bringing fresh concepts and new solutions that will add tremendous value to the business.</p>
            </div>
        </div>
        <div className="row">
            <h1>MEET THE TEAM</h1>
            <div className="col-6 col-md-4"> <b>Sir Prince Portfolio</b>
            <img src={pImg} alt="pImg" width={100} />
            <br /><br /><br /><br />
            </div>
            <div className="col-6 col-md-4"><b>Sir Melvin Portfolio</b>
            <img src={mImg} alt="mImg" width={100} />
            </div>
            <div className="col-6 col-md-4"><b>Portfolio ko</b>
            <img src={gImg} alt="gImg" width={100} />
            </div>
            <div></div>
        </div>
        <div className="row">
            <div className="col-6 justicy-content-center">
                <img src={teamImg} alt="teamImg" width={600} />
            </div>
              <div className="col-6">
                <h1>BE PART OF</h1>
                <h1>OUR TEAM!</h1>
                <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark">Explore Job Opportunities</button>
              </div>
            </div>
      
     

    </div>
  )
}

export default About
