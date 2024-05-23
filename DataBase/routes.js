import express from "express";
import { addData, deleteData, find, home, newTable, show, updateData } from "./controller.js";
import { adminInsert, loginCheck, verifyToken } from "../Admin/adminCont.js";
import { addCourse, addFeedback, addUser, checkUser, deleteCourse, deleteFeedback, newUserTable, showCourse, showFeedback } from "./users.js";

const routeSql = express.Router();

routeSql.get('/',home);

routeSql.get('/std',verifyToken, show);

routeSql.get('/find/:n', verifyToken,find);

routeSql.post('/update/:n',verifyToken, updateData);

routeSql.delete('/delete/:n', verifyToken,deleteData);





routeSql.post('/insert', addData); //add  verifyToken

routeSql.post('/insertUser',addUser);
routeSql.post('/loginUser', checkUser);
routeSql.post('/new', newUserTable);
routeSql.post('/course',verifyToken, addCourse);
routeSql.get('/courseList',verifyToken, showCourse);
routeSql.delete('/delete-course/:n',verifyToken, deleteCourse);

routeSql.post('/feedback', verifyToken,addFeedback);
routeSql.get('/feedbackList' ,showFeedback);//<=
routeSql.delete('/deleteFeedback/:n',verifyToken, deleteFeedback);



routeSql.get('/new/:name', newTable);

routeSql.post('/admin' , adminInsert);

routeSql.post('/login' , loginCheck);

export default routeSql;

