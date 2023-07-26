import React from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, CardText, CardSubtitle, CardBody, Button, List, Row, Col, ListInlineItem, CardHeader, CardFooter, } from 'reactstrap'


const Carrers = () => {
  return (
    <div class='container-fluid'>
        <h1 class='p-4 part1 m-4' >Carrers</h1>
    
        
                <Card inverse>
                    <CardImg class="cover"
                    alt="Card image cap"
                    src="https://globalilluminators.org/wp-content/uploads/2016/08/career1.jpg"
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
                                           <img src="webdev.jpg"/>
                                        
                                    </Col>
                            </Row>
                        
                        </Row>        


        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Carrers