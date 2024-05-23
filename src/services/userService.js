import axios from "axios";
import { ADD_COURCE, ADD_FEEDBACK_ROUTE, ADD_USER_ROUTE, CREATE_USER_TABLE, DELETE_COURCE_ROUTE, DELETE_FEEDBACK_ROUTE, GET_COURCE_ROUTE, GET_FEEDBACK_ROUTE, LOGIN_USER_ROUTE } from "../constance/apiRoutes";
import { getToken } from "./adminService";

export function addUser(userData){
    return ( axios.post(ADD_USER_ROUTE,userData));
}

export function loginUser(userData){
    return ( axios.post(LOGIN_USER_ROUTE,userData));
}

export function newUserTable(userData){
    return ( axios.post(CREATE_USER_TABLE,userData, {headers:{"Authorization": `Bearer ${getToken()}`}}));
}

// export function findStudentById(stdId){
//     return axios.get(`${FIND_API_ROUTE}/${stdId}`, {headers:{"Authorization": `Bearer ${getToken()}`}});
// }
export function addCource(userData){
    return ( axios.post(ADD_COURCE,userData, {headers:{"Authorization": `Bearer ${getToken()}`}}));
}

export function getCource(){
    return ( axios.get(GET_COURCE_ROUTE, {headers:{"Authorization": `Bearer ${getToken()}`}}));
}

export function deleteCource(param){
    return ( axios.delete(`${DELETE_COURCE_ROUTE}/${param}`, {headers:{"Authorization": `Bearer ${getToken()}`}}));
}

export function addFeedback(userData){
    return ( axios.post(ADD_FEEDBACK_ROUTE,userData, {headers:{"Authorization": `Bearer ${getToken()}`}}));
}

export function getFeedback(userData){
    return ( axios.get(GET_FEEDBACK_ROUTE,userData, {headers:{"Authorization": `Bearer ${getToken()}`}}));
}

export function deleteFeedback(param){
    return ( axios.delete(`${DELETE_FEEDBACK_ROUTE}/${param}`, {headers:{"Authorization": `Bearer ${getToken()}`}}));
}