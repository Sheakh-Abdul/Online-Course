import { Alert, Button, Container, Modal, Table, Toast, ToastContainer } from "react-bootstrap";
import { Header } from "./Header";
import { deleteStudent, fetchStudent } from "../services/studentService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "../Footer/Footer";
import { NavBarAdmin } from "./adminNavBar";

export function StudentList() {
    const [studentsData, setStudents] = useState([]);
    const [show, setShow] = useState(false);
    const [studentId, setStudentId] = useState(0);

    const [toastShow, setToastShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = async() => {
        const res = await fetchStudent();
        setStudents(res.data);
        
    }

    const handleClose = ()=>{setShow(false);}
    const handleCloseToast=()=>{setToastShow(false)}

    const deleteData = async()=>{
       const res = await deleteStudent(studentId);
       console.log(res.status);
       setShow(false);
       setToastShow(true);
       getAllStudents();
       
    }

    return (
        <div>
            <NavBarAdmin/>
        <Container>
            <Header title="List of Users" desc="Here you can View , Edit or Delete the user" />
            <Container>
                {
                    studentsData.length === 0 ? <Alert variant="danger">No data here please register</Alert>:<Table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>USERNAME </th>
                            <th> EMAIL</th>
                            <th> PHONE</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    {console.log(studentsData)}
                    <tbody>
                        {
                            studentsData.map((e) => {
                               return ( <tr>
                                    <td>{e.name}</td>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phone}</td>
                                    <td>
                                        <Button variant='danger' onClick={()=>{
                                            setShow(true);
                                            setStudentId(e.username);
                                        }}>Delete</Button>&nbsp;&nbsp;&nbsp; <Button variant='primary' onClick={()=>{
                                            navigate(`/student-edit/${e.username}`);
                                        }}>Update</Button>
                                    </td>
                                </tr>)

                            })
                        }
                    </tbody>
                </Table>
                }
                
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete {studentId} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteData}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleClose} >
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-end">
                <Toast bg="success" onClose={handleCloseToast} show={toastShow} delay={3000} autohide>
                    <Toast.Header >
                       
                        <strong className="me-auto">Confirmation</strong>
                        
                    </Toast.Header>
                    <Toast.Body className="text-white">User Deleted</Toast.Body>
                </Toast>
            </ToastContainer>

        </Container>
        <Footer/>
        </div>
    )
}