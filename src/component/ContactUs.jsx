import { Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../constance/appRoutes";
import '../ComponentCss/Container.css';
import { addFeedback} from "../services/userService";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "../Footer/Footer";

export function ContactUs() {
    const [formData, setFormData] = useState({ username: '', name: '', email: '', phone:'', feedback: '' });
    const [toastShow , setToast] = useState(false);
    const nevigate = useNavigate();


    const handleClose = ()=>{setToast(false);}

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         console.log(formData);
         addFeedback(formData).then((res) => {
            setToast(true);
           
            alert("Your Feedback/Query has been Successfully submitted. we will respond you very soon. thank you so much.");
            nevigate(HOME_ROUTE);
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <div>
            <NavigationBar/>
        <div style={{ background: 'URL("https://www.involve.me/img/containers/assets/blog/customer-feedback-types/customer-feedback-typesL.png/5813c4d1df1268f9ba74c84ea76a23b8.webp")',backgroundSize: "cover", height: "550px"}} className="roomfac">
        <Card border="primary" style={{ width: '40rem' ,height:"460px" ,opacity: .95, background: "#edede9"}} className="mt-5">
            <Card.Body>
                <Card.Title>
                    <Header title="Give your feedback, your feedback is important for us"/>
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
                    <Form.Label>Feedback/Query</Form.Label>
                    <Form.Group  >
                    </Form.Group>         
                                <textarea  name="feedback" placeholder="Enter your feedback/Query" required onChange={handleFieldChange}/>  
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Submit</Button>
                        </Col>

                    </Row>
                </Form>
            </Container>
            <Modal show={toastShow} onHide={handleClose} style={{background: "transparent"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cource Added Successfully</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} >
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
           
        </Container>
        </Card.Body>
            </Card>

        </div>
       
        </div>
    )
}