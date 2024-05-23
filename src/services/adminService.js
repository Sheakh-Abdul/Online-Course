import axios from "axios";
import { ADMIN_LOGIN } from "../constance/apiRoutes";

export function checkAdmin(formData){
    return (
        axios.post(ADMIN_LOGIN,formData)
    );
}

export function storeToken(token){
    localStorage.setItem('my-token',token);
}

export function getToken(token){

    return(
        localStorage.getItem('my-token',token)
    );
}

export function removeToken(token){
    localStorage.removeItem('my-token',token);
}