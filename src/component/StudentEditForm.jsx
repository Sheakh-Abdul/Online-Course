import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {  findStudentById, updateStudent } from "../services/studentService";
import { STUDENT_LIST_ROUTE } from "../constance/appRoutes";
import { NavigationBar } from "./NavigationBar";
import { NavBarAdmin } from "./adminNavBar";
import { Footer } from "../Footer/Footer";

export function StudentEditForm(){

    const stdUsername = useParams();
    const [student , setStudent] = useState({username:'',name:'',email:'',phone:''});
    const navigate = useNavigate();

    const getStudentId = async ()=>{
        console.log(stdUsername);
        const res = await findStudentById(stdUsername.id);
        if(res.status === 200){
            setStudent(res.data);
            console.log(res.data);
            
        }
    }
    useEffect(()=>{
        //console.log(stdId.id);
        getStudentId();
       // console.log(student);
        
    },[])

    const onFldChange = (e)=>{
        setStudent({...student, [e.target.name]: e.target.value})
    }

    const onHandleSubmit = async(e)=>{
        e.preventDefault();
       const res = await  updateStudent(student); 
       if(res.status === 200){
        navigate(STUDENT_LIST_ROUTE);
       }  
    }
    return(
        <div>
        <NavBarAdmin/>
        <Container className="mb-4">
        <Header title = "Edit Form"></Header>
        <Container>
            {console.log(student)}
                <Form onSubmit={onHandleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>USERNAME</Form.Label>
                                <Form.Control type="text"  name="username" value={student.username} readOnly />

                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Edit Name" name="name" value={student.name} onChange={onFldChange} />

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Edit Email" name="email" value={student.email} onChange={onFldChange}/>

                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Number</Form.Label>
                                <Form.Control type="text" placeholder="Edit Number" name="number" onChange={onFldChange}/>
                                

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Update Student</Button>
                        </Col>

                    </Row>
                </Form>
            </Container>
    </Container>
    <Footer/>
    </div>
    )
}