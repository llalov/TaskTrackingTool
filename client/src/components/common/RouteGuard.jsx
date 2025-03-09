import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { Navigate, Outlet } from "react-router-dom";

export default function RouteGuard()  {
    const {isAuthenticated} = useContext(AuthenticationContext);

    return isAuthenticated
        ? <Outlet/>
        : <Navigate to="/login" />;
}