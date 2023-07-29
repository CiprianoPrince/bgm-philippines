import React from 'react'
import {Card, CardImg, CardGroup, CardImgOverlay, CardTitle, CardText, CardSubtitle, CardBody, Button, List, Row, Col, ListInlineItem, CardHeader, CardFooter, Table } from 'reactstrap'
import Pragress from '../assets/pragress.jpg'
import Development from '../assets/development.jpg'
import Recruite from '../assets/recruite.jpg'
import Employee from '../assets/employee.jpg'
import Onsite from '../assets/onsite.jpg'
import Carrer from '../assets/career.jpg'
import Hybrid from '../assets/hybrid.jpg'
import Workhome from '../assets/workhome.jpg'
import Glenn from '../assets/glenn.jpg'
import Boy from '../assets/boy.webp'
import {BsFillArrowRightCircleFill } from 'react-icons/bs'


const Carrers = () => {
  return (
    <div class='container-fluid'>
        <h1 class='p-4 part1 m-4' >Carrers</h1>
    
        <Card inverse>
                    <CardImg class="cover"
                    alt="Card image cap"
                    src={Carrer}
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

           
                   
            <div class="container">
                    <p class="text">You will be familiarized and working in a fast-paced, agile environment. Career advancement will be based on your performance evaluation which covers job-specific, attendance and behavioral criteria.</p>
                    <p class="text1"> As you step into the next level, you will be introduced to new responsibilities such as handling a team, conducting trainings and engaging in other high-level project management initiatives. </p>
            </div>
      
       <div class="container">
            
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
                                        
                                                <h1 class="carprog">CAREER PROGRESSION</h1>
                                            
                                        </Col>
                                    <Col
                                        
                                        sm="6"
                                        xs="6"
                                        >
                                            <img src={Pragress}/>
                                        
                                    </Col>
                            </Row>
                        
                        </Row>     
            
                    <div class="container">
                    <img src={Development} class='center' /><br></br><br></br><br></br><br></br>
                    </div>

                    <div class="container">
                    <h1 class="job">JOB OPENINGS</h1><br></br>


                    <Row>
                    <Col
                    
                    sm="4"
                    xs="6"
                    >
                                      <Table border={2} size='sm w-100' >
                        <thead>
                            <tr>
                            <th class="table1 " colSpan="2">
                            <h3>Junior Software Engineer</h3> 
                            </th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="table1">
                                Full-Time Job 
                                
                                 
                            </td>
                            <td class="table1">9:00am~5:30pm</td>
                            
                            </tr>
                            <tr>
                            <td class="tfoot" colSpan={2}>
                            <Button color='none'>
                            <a href="">View Details</a>
                                </Button> 
                                <BsFillArrowRightCircleFill size='20' color='green'/>
                            </td>
                            
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                    <Col
                    
                    sm="4"
                    xs="6"
                    >
                                  <Table border={2} size='sm w-100 '>
                        <thead>
                            <tr>
                            <th class="table1 " colSpan="2">
                            <h3>Software Engineer </h3>
                            </th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="table1">
                                Full-Time Job 
                                
                                 
                            </td>
                            <td class="table1">9:00am~5:30pm</td>
                            
                            </tr>
                            <tr>
                            <td class="tfoot" colSpan={2}>
                            <Button color='none'>
                            <a href="">View Details</a>
                                </Button> 
                                <BsFillArrowRightCircleFill size='20' color='green'/>
                            </td>
                            
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                    <Col
                    
                    sm="4"
                    >
                                  <Table border={2} size='sm w-100 '>
                        <thead>
                            <tr>
                            <th class="table1 " colSpan="2">
                            <h3>Mid Software Engineer</h3>
                            </th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="table1">
                                Full-Time Job 
                                
                                 
                            </td>
                            <td class="table1">9:00am~5:30pm</td>
                            
                            </tr>
                            <tr>
                            <td class="tfoot" colSpan={2}>
                            <Button color='none'>
                            <a href="">View Details</a>
                                </Button> 
                                <BsFillArrowRightCircleFill size='20' color='green'/>
                            </td>
                            
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                    </Row>
                    <Row>
                    <Col
                    
                    sm="4"
                    xs="6"
                    >
                                      <Table border={2} size='sm w-100' >
                        <thead>
                            <tr>
                            <th class="table1 " colSpan="2">
                            <h3>Sr. Software Engineer</h3> 
                            </th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="table1">
                                Full-Time Job 
                                
                                 
                            </td>
                            <td class="table1">9:00am~5:30pm</td>
                            
                            </tr>
                            <tr>
                            <td class="tfoot" colSpan={2}>
                            <Button color='none'>
                            <a href="">View Details</a>
                                </Button> 
                                <BsFillArrowRightCircleFill size='20' color='green'/>
                            </td>
                            
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                    </Row>
              
                </div>

            </div>
                
                <div class="container">
                <h1 class="recprocess"><h1>CAREER PROGRESSION</h1>
                <img src={Recruite} class='center' />                 
                </h1>
                
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
                                        
                                        <img src={Employee} class="employee"/>
                                            
                                        </Col>
                                    <Col
                                        
                                        sm="6"
                                        xs="6"
                                        >
                                        <h1 class="benefits">EMPLOYEE BENEFITS</h1>
                                        <h3 class='benefits1'>HMO (Medical & Dental Coverage)</h3>
                                        <h3 class='benefits1'>Performance-Based Salary Increase</h3>
                                        <h3 class='benefits1'>Flexible Work Setup</h3>
                                        
                                        
                                    </Col>
                            </Row>
                        
                        </Row>     
                </div>
                
                <div class="container">
                    <h1 class="workarrange">WORK ARRANGEMENT</h1>
                    
                    <Row className='rowrow'>
                        <Col
                        sm="4"
                        xs="6"
                        >
                            <Card>
                                <CardImg
                                alt="Card image cap"
                                src={Onsite} 
                                
                                />
                                <CardBody>
                                <CardTitle className='cardtitle'>
                                   Work Onsite
                                </CardTitle>
                                <CardText className='cardtext'>
                                Working on location allows you to work as part of a team, increasing collaboration and improving productivity. 
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col
                        sm="4"
                        xs="6"
                        >
                            <Card>
                                <CardImg
                                alt="Card image cap"
                                src={Hybrid} 
                                
                                />
                                <CardBody>
                                <CardTitle className='cardtitle'>
                                   Hybrid
                                </CardTitle>
                                <CardText className='cardtext'>
                                Hybrid work is a flexible work model that supports a blend of in-office, remote, and on-the-go workers. 
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col
                        sm="4"
                        xs="6"
                        >
                            <Card>
                                <CardImg className='workhome'
                                alt="Card image cap"
                                src={Workhome} 
                                
                                />
                                <CardBody>
                                <CardTitle className='cardtitle'>
                                   Work from Home
                                </CardTitle>
                                <CardText className='cardtext'>
                                Employees work from home by using a dedicated laptop/PC connected to the internet to communicate with team members. 
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>         
                </div>

                <div class="container">

                
                        <h1 class="meet">MEET THE TEAM</h1>
                        
                        
                        <Row>
                                <Col
                                
                                sm="4"
                                xs="6"
                                >
                                    
                                 <img src={Boy} class="rounded-circle mb-3 member" />
                                        
                                    <h5 class="mb-2 prince"><strong><h2>Prince</h2></strong></h5>
                                    <p class="text-muted detailsprince" >Web designer <span class="badge bg-primary">PRO</span></p>
                                   
                                </Col>
                                <Col
                                
                                sm="4"
                                xs="6"
                                >
                                 <img src= {Glenn} class="rounded-circle mb-3 member w-100" />
                        
                                    <h5 class="mb-2 glen" ><strong><h2>Glen</h2></strong></h5>
                                    <p class="text-muted detailsglen" >Web designer <span class="badge bg-primary">PRO</span></p>
                                   
                                </Col>
                                <Col
                                
                                sm="4"
                                >
                                 <img src={Boy} class="rounded-circle mb-3 member" />
                                
                               
                                <h5 class="mb-2 melvin"><strong><h2>Melvin</h2></strong></h5>
                                <p class="text-muted detailsmelvin" >Web designer <span class="badge bg-primary">PRO</span></p>
                            
                                </Col>
                                
                        </Row>
                       <div>
                       <button type="button" class="btn btn-outline-success w-25 meetus m-auto">MEET OUR TEAM</button>
                       </div>
                       
                </div>
                
            
    
    </div>
  )
}

export default Carrers