import { Alert, Button, Card, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { checkAdmin, storeToken } from "../services/adminService";
import { Link, useNavigate } from "react-router-dom";
import { FEED_LIST_ROUTE, HOME_ROUTE, LOGIN_ROUTE, RAGISTRATION_ROUTE } from "../constance/appRoutes";
import '../ComponentCss/Container.css';

export function AdminLogin() { //UserLogin
    const [formData, setFormData] = useState({ name: '', pass: '' });
    const [erre, setErr] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const res = await checkAdmin(formData);
            console.log(res);
            if (res.status === 200) {
                //res.data.msg
                setErr('');
                storeToken(res.data.token);
                console.log(res.data.token);
                navigate(FEED_LIST_ROUTE);
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 400) {
                setErr(error.response.data.msg);
            }
        }
    }

    return (
        <div style={{ background: 'URL("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',backgroundSize: "cover", height: "600px" }} className="roomfac">
            <Card border="primary" style={{ width: '30rem' ,height:"500px" ,opacity: 0.95, background: "grey"}} className="mt-5">
                <Card.Body>
                    <span>
                <Link to={LOGIN_ROUTE} style={{marginLeft: '30px', textDecoration: 'none',color: '#a3c7be'}}>User Login</Link>
                    <Link to={RAGISTRATION_ROUTE} style={{marginLeft: '10px', textDecoration: 'none',color: '#a3c7be'}}>Admin Login</Link>
                    </span>
                    <Card.Title>
                        <Header title="Login Here as Admin"/>
                    </Card.Title>
                    <Container mt={4}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={12}>
                                    <Form.Group className="mb-3 " style={{marginLeft: '20px',marginRight: '25px'}} >
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Username" name="name" onChange={handleChange} />

                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <Form.Group className="mb-3" style={{marginLeft: '20px',marginRight: '25px'}}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name="pass" onChange={handleChange} />

                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button type="submit" variant="primary" >Login </Button>
                                    </Stack>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col >
                                <br />
                                

                                </Col>
                            </Row>

                        </Form>
                        {
                            erre.length === 0 ? null :
                                <Row className="mt-4">
                                    <Alert variant="danger">{erre} </Alert>
                                </Row>
                        }
                    </Container>
                </Card.Body>
            </Card>

        </div>
    )
}