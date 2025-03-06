import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { logout } from "../../api/authentication-api";
import { useContext, useEffect } from "react";


export default function Logout() {
    const {localLogout} = useContext(AuthenticationContext);

    useEffect(() => {
        const handleLogout = async () => {
            await logout();
            localLogout();
        };

        handleLogout();
    }, []);

    return <Navigate to="/home" />
}