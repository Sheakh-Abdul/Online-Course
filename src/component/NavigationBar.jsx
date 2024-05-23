import { Button, Container, Nav, Navbar } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {  ABOUT_ROUTE, CONTACT_US_ROUTE, COURSE_LIST_ROUTE, FEED_LIST_ROUTE, HOME_ROUTE, LOGIN_ROUTE, RAGISTRATION_ROUTE, STUDENT_LIST_ROUTE } from "../constance/appRoutes";
import { removeToken } from "../services/adminService";
import { useNavigate } from "react-router-dom";


export function NavigationBar() {
    const nevigate = useNavigate();
    const clickHandle = ()=>{
        removeToken('my-token');
        nevigate(LOGIN_ROUTE);
    }
    return (

        <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
            <Container>
                
                <Navbar.Brand href="#home"><img src="https://www.pikpng.com/pngl/b/530-5304619_online-training-icon-online-training-course-icon-clipart.png" style={{ width: '80px', height: '50px' }} alt="logo"></img>StudentLearning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to={HOME_ROUTE}>
                        <Nav.Link >Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={COURSE_LIST_ROUTE}>
                        <Nav.Link>Course List</Nav.Link>
                        </LinkContainer>

                        
                        <LinkContainer to={ABOUT_ROUTE}>
                        <Nav.Link >About Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={CONTACT_US_ROUTE}>
                        <Nav.Link >Contact Us</Nav.Link>
                        </LinkContainer>

                        
                    </Nav>
                    <Button variant="success" onClick={clickHandle}>Logout</Button>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}