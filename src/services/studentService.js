import axios from 'axios';
import { DELETE_API_ROUTE, FETCH_API_ROUTE, FIND_API_ROUTE, INSERT_API_ROUTE, UPDATE_API_ROUTE } from '../constance/apiRoutes';
import { getToken } from './adminService';
export function saveStudent(studentData){
    return axios.post(INSERT_API_ROUTE, studentData, {headers:{"Authorization": `Bearer ${getToken()}`}});
}

export function fetchStudent(){
    return axios.get(FETCH_API_ROUTE, {headers:{"Authorization": `Bearer ${getToken()}`}});
}

export function deleteStudent(studentId){
    return axios.delete(`${DELETE_API_ROUTE}/${studentId}`,{headers:{"Authorization": `Bearer ${getToken()}`}});
}

export function updateStudent(updatedData){
    return axios.post(`${UPDATE_API_ROUTE}/${updatedData.username}`, updatedData, {headers:{"Authorization": `Bearer ${getToken()}`}});
}

export function findStudentById(stdId){
    return axios.get(`${FIND_API_ROUTE}/${stdId}`, {headers:{"Authorization": `Bearer ${getToken()}`}});
}