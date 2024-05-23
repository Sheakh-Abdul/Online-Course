import { Button, Card, Col, Container, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../constance/appRoutes";
import '../ComponentCss/Container.css';
import { addUser } from "../services/userService";

export function StudentRegistrationForm() {
    const [formData, setFormData] = useState({ username: '', name: '', password: '', email: '', phone:'' });
    const [toastShow , setToast] = useState(false);
    const nevigate = useNavigate();

    const handleClose = ()=>{setToast(false);}

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addUser(formData).then((res) => {
            setToast(true);
           
            alert(res.data.msg);
            nevigate(LOGIN_ROUTE);
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <div style={{ background: 'URL("https://my.qls.com.au/assets/images/b2c_signin_background.jpg")',backgroundSize: "cover", height: "600px" }} className="roomfac">
        <Card border="primary" style={{ width: '40rem' ,height:"500px" ,opacity: .95, background: "#edede9"}} className="mt-5">
            <Card.Body>
                <Card.Title>
                    <Header title="Sign up for new user"/>
                </Card.Title>
        <Container >
            
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label> 
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleFieldChange} />

                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name="username" onChange={handleFieldChange} />

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleFieldChange} />

                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone Number" name="phone" onChange={handleFieldChange} />

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Your Password" name="password" onChange={handleFieldChange} />

                            </Form.Group>
                        </Col>
                       
                    </Row>
                    
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Sign Up</Button>
                        </Col>

                    </Row>
                </Form>
            </Container>
            <ToastContainer position="top-end">
                <Toast bg="success" onClose={handleClose} show={toastShow} delay={3000} autohide>
                    <Toast.Header >
                       
                        <strong className="me-auto">Confirmation</strong>
                        
                    </Toast.Header>
                    <Toast.Body className="text-white">Student Registered</Toast.Body>
                </Toast>
            </ToastContainer>
           
        </Container>
        </Card.Body>
            </Card>

        </div>
    )
}