import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../services/adminService"
import { LOGIN_ROUTE } from "./appRoutes";

export function PrivateRoute(props){
    const token = getToken();
    
    
    if(token){
        console.log(token);
        return <Outlet/>;
    }else{
        console.log(token);
        return <Navigate to={LOGIN_ROUTE}/> ;
    }
}