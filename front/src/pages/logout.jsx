import { useNavigate } from "react-router-dom";

export function Logout() {
    const navigate = useNavigate();
    localStorage.removeItem('roles')
    localStorage.removeItem('token')
    navigate("/");
    
}