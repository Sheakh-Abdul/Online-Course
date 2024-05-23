
import './App.css';
import { Home } from './component/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { StudentRegistrationForm } from './component/StudentRegistrationForm';
import { StudentList } from './component/StudentList';
import {  ABOUT_ROUTE, ADMIN_LOGIN_ROUTE, CONTACT_US_ROUTE, COURSE_LIST_ROUTE, FEED_LIST_ROUTE, HOME_ROUTE, LOGIN_ROUTE, RAGISTRATION_ROUTE, STUDENT_EDIT_ROUTE, STUDENT_LIST_ROUTE } from './constance/appRoutes';
import { StudentEditForm } from './component/StudentEditForm';
import { Login } from './component/Login';
import { PrivateRoute } from './constance/PrivateRoute';
import { AdminLogin } from './component/AdminLogin';
import { AboutUs } from './component/AboutUs';
import { CourseList } from './component/CourseList';
import { ContactUs } from './component/ContactUs';
import { FeedbackList } from './component/feedbackList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path = {LOGIN_ROUTE} element = {<Login/>}/>
      <Route path = {ADMIN_LOGIN_ROUTE} element = {<AdminLogin/>}/>
      <Route path = {RAGISTRATION_ROUTE} element = {<StudentRegistrationForm/>}/>
      
        <Route  element = {<PrivateRoute/>}>
        <Route path = {COURSE_LIST_ROUTE} element = {<CourseList/>}/>
      <Route path = {CONTACT_US_ROUTE} element = {<ContactUs/>}/>
      <Route path = {FEED_LIST_ROUTE} element = {<FeedbackList/>}/>
          <Route path={HOME_ROUTE} element={<Home/>}/>
          <Route path={ABOUT_ROUTE} element={<AboutUs/>}/> 
        <Route path = {STUDENT_LIST_ROUTE} element = {<StudentList/>}/>
        <Route path = {STUDENT_EDIT_ROUTE} element = {<StudentEditForm/>}/>
        </Route>
        
      </Routes>    
    </BrowserRouter>
    

  );
}

export default App;
