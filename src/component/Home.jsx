import {  Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';

import { NavigationBar } from './NavigationBar';

import { Footer } from '../Footer/Footer';

import Record from '../records/records.json';
import { useState } from 'react';
import { addCource } from '../services/userService';

export function Home() {
    const [course, setCourse] = useState({id:'',name:'',teacher:'',price:''});
    
    const [toastShow, setToastShow] = useState(false);

    
    const handleCloseToast=()=>{setToastShow(false)}
    
    return (
        <div>
            <NavigationBar />
            
            <Container className='mt-3'>
            <Row>               
            {                
               Record.map((rec)=>{                   
                  return  (<Col lg={4} className='mb-3'>
            <Card style={{ width: '23rem', borderRadius: "19px" }}>
                <Card.Img variant="top" src={rec.img} style={{ height: '250px' , borderRadius: "19px"}} />
                <Card.Body>
                    <Card.Title>{rec.courseName} by {rec.teacherName}</Card.Title>
                    <Card.Text>
                    {rec.description}
                    <p>Price : {rec.price}$</p>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{
                        setToastShow(true);
                        setCourse({id:rec.courseId,name: rec.courseName,teacher: rec.teacherName,price: rec.price })
                        console.log(course);
                        
                        addCource(course).then((res)=>{
                            console.log(res.data.msg);
                            
                        }).catch((e)=>{
                            console.log(e);
                        })
                    }}>Buy Now</Button>
                </Card.Body>
            </Card>
            </Col>)
                })
            }
            </Row>
            <Modal show={toastShow} onHide={handleCloseToast} style={{background: "transparent"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cource Added Successfully</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseToast} >
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            
            </Container>
            
            <Footer />
        </div>
    )
}