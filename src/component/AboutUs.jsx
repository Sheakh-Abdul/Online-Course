import { Col, Container, Row } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import { Header } from "./Header";
import { Foter } from "./Foter";
import { Footer } from "../Footer/Footer";

export function AboutUs(){
    return(
        <div style={{background: "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)"}}>
             <NavigationBar/>
             <Header title="About us"/>
            <Container>
                <Row className="mb-4">
                    <Col lg={4}>
                    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="intro" style={{ width: '350px', height: '300px' }}/>
                    </Col>
                    <Col lg={8}>
                        <h2>Welcome to StudentLearning!</h2>
                    <p style={{ fontSize : '22px' ,alignContent: "normal" }}>At StudentLearning, we are dedicated to providing high-quality and accessible online courses across a wide range of subjects. Our platform is designed to empower learners to achieve their educational and professional goals from anywhere in the world. Here's a closer look at who we are and what we stand for</p>
                    </Col>
                </Row>
                
                <Row className="mb-4">
                    
                    <Col lg={8}>
                        <h2>Our Mission</h2>
                    <p  style={{ fontSize : '25px', alignContent: "normal"  }}>At StudentLearning, our mission is to facilitate lifelong learning by offering top-notch online courses that foster personal and professional development. We aim to create a dynamic and inclusive learning environment that encourages exploration, growth, and skill acquisition.</p>
                    </Col>
                    <Col lg={4}>
                    <img src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="intro" style={{ width: '350px', height: '300px' }}/>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col lg={4}>
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="intro" style={{ width: '350px', height: '270px' }}/>
                    </Col>
                    <Col lg={8}>
                        <h2>Our Vision</h2>
                    <p style={{ fontSize : '22px' ,alignContent: "normal" }}>Our vision is to revolutionize the way education is delivered by leveraging technology to make learning more convenient, flexible, and engaging. We strive to be a global leader in online education, catering to diverse learners and providing them with the tools they need to succeed in a rapidly changing world.</p>
                    </Col>
                </Row>
                
                <Row className="mb-4">
                    
                    <Col lg={8}>
                        <h2>What Sets Us Apart</h2>

                    <p > 
                        <h5>- Expert Instructors</h5>
                    <p style={{ fontSize : '18px', alignContent: "normal"  }}>Our courses are developed and taught by industry experts, professionals, and educators who bring real-world experience and expertise to the virtual classroom.</p>
                    <h5>- Diverse Course Offerings</h5>
                    <p style={{ fontSize : '18px', alignContent: "normal"  }}> From programming and design to business and beyond, we offer a wide variety of courses to cater to the diverse interests and career paths of our learners.</p>
                    <h5>- Interactive Learning</h5>
                    <p style={{ fontSize : '18px', alignContent: "normal"  }}>Our platform is designed to foster interactive and engaging learning experiences, integrating multimedia, quizzes, and assignments to enhance comprehension and retention.</p>
                    <h5>- Flexibility and Accessibility</h5>
                    <p style={{ fontSize : '18px', alignContent: "normal"  }}>With 24/7 access to course materials, learners can study at their own pace and on their own schedule, making education fit seamlessly into their lives</p>                    
                    </p>
                    </Col>
                    <Col lg={4}>
                    <img src="https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="intro" style={{ width: '350px', height: '450px' , borderRadius: "15px"}}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}