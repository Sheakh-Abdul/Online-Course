import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";

import { useEffect, useState } from "react";
import { NavigationBar } from "./NavigationBar";
import { deleteFeedback, getFeedback } from "../services/userService";
import { Footer } from "../Footer/Footer";
import { NavBarAdmin } from "./adminNavBar";

export function FeedbackList() {
    const [studentsData, setStudents] = useState([]);
    const [show, setShow] = useState(false);
    const [studentId, setStudentId] = useState(0);

    const [toastShow, setToastShow] = useState(false);
  

    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = async() => {
        const res = await getFeedback();
        setStudents(res.data);
        
    }

    const handleClose = ()=>{setShow(false);}
    const handleCloseToast=()=>{setToastShow(false)}

    const deleteData = async()=>{
        console.log(studentId);
       const res = await deleteFeedback(studentId);
       console.log(res.status);
       setShow(false);
       setToastShow(true);
       getAllStudents();
       
    }

    return (
        <div>
            <NavBarAdmin/>
        <Container>
            <Header title="List of FeedBack/Query" desc="Here you can view or delete the FeedBack/Query" />
            <Container>
                {
                    studentsData.length === 0 ? <Alert variant="danger">No FeedBack/Query</Alert>:<Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username </th>
                            <th> Email</th>
                            <th> Phone</th>
                            <th>Feedback/Query</th>
                            <th> Date</th>
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
                                    <td>{e.feedback}</td>
                                    <td>{e.date}</td>
                                    <td>
                                        <Button variant='danger' onClick={()=>{
                                            setShow(true);
                                            setStudentId(e.username);
                                        }}>Delete</Button>
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
                <Modal.Body>Do you want to delete?</Modal.Body>
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