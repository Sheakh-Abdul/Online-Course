import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { deleteCource, getCource } from "../services/userService";
import { Footer } from "../Footer/Footer";

export function CourseList(){
    
    const [courseData, setCourse] = useState([]);
    const [show, setShow] = useState(false);
    const [courseId, setCourseId] = useState(0);

   
    const navigate = useNavigate();

    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = async() => {
        const res = await getCource();
        setCourse(res.data);
        
    }

    const handleClose = ()=>{setShow(false);}
    

    const deleteData = async()=>{
        console.log(courseId);
       const res = await deleteCource(courseId);
       console.log(res.status);
       setShow(false);
       
       getAllStudents();
       
    }

    return (
        <div>
            <NavigationBar/>
        <Container>
            <Header title="My Courses" desc="Here you can view or delete the course" />
            <Container>
                {
                    courseData.length === 0 ? <Alert variant="danger">No data here please add course</Alert>:<Table>
                    <thead>
                        <tr>
                            <th> ID</th>
                            <th>COURSE NAME </th>
                            <th>TEACHER</th>
                            <th> PRICE</th>
                            <th> DATE AND TIME</th>
                            <th> ACTION</th>
                        </tr>
                    </thead>
                    {console.log(courseData)}
                    <tbody>
                        {
                            courseData.map((e) => {
                               return ( <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.teacher}</td>
                                    <td>{e.price}</td>
                                    <td>{e.date}</td>
                                    <td>
                                        <Button variant='danger' onClick={()=>{
                                            setShow(true);
                                            setCourseId(e.sn);
                                        }}>Delete</Button>
                                    </td>
                                </tr>)

                            })
                        }
                    </tbody>
                </Table>
                }
                <Button variant='primary' onClick={()=>{
                                            navigate(`/home`);
                                        }}>ADD MORE</Button>
                
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to remove this course?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteData}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleClose} >
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
            

        </Container>
        <Footer/>
        </div>
    )
}