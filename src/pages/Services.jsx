
import React from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, CardText, CardSubtitle, CardBody, Button, List, Row, Col, ListInlineItem, CardHeader, CardFooter, } from 'reactstrap'
import { BsAlignCenter, BsCodeSlash, BsFillPeopleFill } from 'react-icons/bs';
import {FaPaintBrush } from 'react-icons/fa';
import DevProcessImg  from '../assets/devprocess.jpg'
import PhpImg from '../assets/php.webp'
import Laravel from '../assets/laravel.webp'
import Python from '../assets/python.webp'
import Rails from '../assets/rails.webp'
import Cube from '../assets/cube.webp'
import Symphony from '../assets/symfony.webp'
import Sass from '../assets/sass.webp'
import Fastapi from '../assets/fastapi.webp'
import Nuxtjs from '../assets/nuxtjs.webp'
import ReacT from '../assets/react.webp'
import Vue from '../assets/vue.webp'
import Nodejs from '../assets/node.webp'
import Mysql from '../assets/mysql.webp'
import Postre from '../assets/postgre.webp'
import Maria from '../assets/mariadb.webp'
import Oracle from '../assets/oracle.webp'
import Redis from '../assets/redis.webp'
import Git from '../assets/git.webp'
import Aws from '../assets/aws.webp'
import Tailwind from '../assets/tailwind.png'
import Bitbucket from '../assets/bitbucket.png'
import Docker from '../assets/docker.webp'
import Team from '../assets/team.webp'
import Webdev from '../assets/webdev.jpg'
import Devops from '../assets/devops.jpg'


const Services = () => {
return (
    <div class='container-fluid'>
        <h1 class='p-4 part1 m-4' >Our Services</h1>
    
        
                <Card inverse>
                    <CardImg class="cover"
                    alt="Card image cap"
                    src={Devops}
                    style={{
                        height: 270
                    }}
                    width="100%"
                    />
                    <CardImgOverlay>
                    <CardTitle tag="h1" className='p-5'> 
                        
                    </CardTitle>
                    </CardImgOverlay>
                </Card>

            <div className='container'>
                            <List><h1 className='p-4'>Our Strengths and Features:</h1>
                                <li className='p-2'>
                                Provide consultation and offer a good software product to our potential clients to help improve their business processes.
                                </li>
                                <li className='p-2'>
                                Continue or re-develop projects that were not finished by other company.
                                </li>
                                <li className='p-2'> 
                                Continue or re-develop projects that were not finished by other company.
                                </li>
                                </List>
            </div>


                                
            <div className='container'>

                <Row>
                            <Col
                            
                            sm={{
                                offset: 1,
                                order: 2,
                                size: 6
                            }}
                            >
                            
                            </Col>
                
                    <Row>
                            <Col
                           
                            sm="6"
                            xs="6"
                            >
                            <Card className='text-center w-100 my-2'
                                    style={{
                                        width: '25rem' 
                                    }}
                                    >
                                    <img src={Webdev} class="webdev"/>
                                </Card>
                            </Col>
                        <Col
                            
                            sm="6"
                            xs="6"
                            >
                                <List type="unlist">
                                    <ListInlineItem className='p-2'>
                                    Web development is the process of creating and maintaining websites; it’s the work that goes on behind the scenes to make a website appear attractive, work quickly, and provide a consistent user experience. Web developers use a range of coding languages and frameworks to do this. The choice of languages and frameworks is determined by the tasks they’re performing and the platforms they’re using.
                                    </ListInlineItem>
                                    <ListInlineItem className='p-2'>
                                    Web development talents are in high demand making it an excellent career choice. It is one of the most easily accessible and well-paying fields.
                                    </ListInlineItem>
                                    <ListInlineItem className='p-2'>
                                    Based on the best practices, our team provides excellent service solutions that are centered around SEO strategies. We deliver faster and reduce cost using the latest techniques.
                                    </ListInlineItem>
                                    </List>
                            
                        </Col>
                </Row>
            
            </Row> <br></br><br></br><br></br>      
            <h1 className='p-4'>More Service that we Offer:</h1>

            <Row>
                    <Col sm="4" >
                        <Card body style={{width:"", height:"100%"}}> 
                        <CardTitle tag="h5">
                        <BsCodeSlash size='2rem' color='green'/>
                        </CardTitle>
                        <CardText>
                            <h4>No code development</h4>
                        </CardText>
                        <CardText>
                        Our team builds a system or application successfully with a code-free development that works in all platform.
                        </CardText>
                        </Card>
                    </Col>

                    <Col sm="4" >
                        <Card body style={{width:"", height:"100%"}}>
                        <CardTitle tag="h5">
                        <FaPaintBrush size='2rem' color='green'/>
                        </CardTitle>
                        <CardText>
                        <h4>UI/UX Design Services</h4>
                        </CardText>
                        <CardText>
                        We create interactive visual design using the right cutting-edge technology. 
                        </CardText>
                        </Card>
                    </Col>

                    <Col sm="4">
                        <Card body style={{width:"", height:"100%"}}>
                        <CardTitle tag="h5">
                            <BsFillPeopleFill  size='2rem' color='green'/>
                        </CardTitle>
                        <CardText>
                        <h4>Staff Augmentation</h4>
                        </CardText>
                        <CardText>
                        As a service provider, we deploy engineers to complete other business's  team and follow their leadership and development process.
                        </CardText>
                        </Card>
                    </Col>
            </Row><br></br><br></br><br></br>   

                <div class='container'>
                <h1 className='p-4'>DEVELOMENT <h1>PROCESS</h1></h1>
                <Row>
                    <Col
                    
                    xs="6"
                    >
                    <img src={DevProcessImg} class='img1'/>
                    </Col>
                    <Col
                   
                    xs="6"
                    >
                    <p class='center'>
                        We make sure to execute proper planning and smart decision-making to deliver the best product to our clients.<br></br><br></br>
                    
                        As engineer we will not limit your responsibilities  and not just focus on thinking programming solutions, but you are also expected to execute testing or design technical documentations.<br></br><br></br>

                        We are an agile environment, we deliver insightful and proper feedback to our engineers and clients in a timely manner.<br></br><br></br>

                        We encourage teamwork, innovation, process improvement, high-quality output and growth throughout our whole development process.<br></br><br></br>
                    </p>

                        
                    </Col>
                </Row><br></br><br></br><br></br>   
            </div>
            <div className='container'>
                <h1>TECHNOLOGIES<h1>WE ARE USING</h1></h1><br></br>
                    <p>We always make sure to be on trend  when it comes to new technologies.
                    <br></br>Our employees are open to share and collaborate!</p>

                    <img src={PhpImg} class="techs"/>
                    <img src={Laravel} class="techs"/>
                    <img src={Python}class="techs"/>
                    <img src={Rails}class="techs"/>
                    <img src={Cube}class="techs"/>
                    <img src={Symphony}class="techs"/>
                    <img src={Tailwind}class="techs"/>
                    <img src={Sass}class="techs"/>
                    <img src={Fastapi}class="techs"/>
                    <img src={Nuxtjs}class="techs"/>
                    <img src={ReacT}class="techs"/>
                    <img src={Vue}class="techs"/>
                    <img src={Nodejs}class="techs"/>
                    <img src={Mysql}class="techs"/>
                    <img src={Postre}class="techs"/>
                    <img src={Maria}class="techs"/>
                    <img src={Oracle}class="techs"/>
                    <img src={Redis}class="techs"/>
                    <img src={Git}class="techs"/>
                    <img src={Aws}class="techs"/>
                    <img src={Bitbucket}class="techs"/>
                    <img src={Docker}class="techs"/>
                    

                    
                
            </div>

            <div class="container">
            <Row>
                    <Col
                    
                    xs="6"
                    >
                  <img src={Team} class="team"/>
                    </Col>
                    <Col
                   
                    xs="6"
                    >
                    <p class='join'>
                        <h1 class='part'>BE PART OF</h1> <h1 class='part1'>OUR TEAM!</h1>
                        <Button className='btn btn-success w-50 p-2'>Explore Job Opportunity</Button>
                    </p>

                        
                    </Col>
                </Row>
                

            </div>

    </div>
</div>
)

}

export default Services