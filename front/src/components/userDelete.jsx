import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';

export function UserDelete(){
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3001/api/user/delete`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
            },
        })
        .then(response => response.json())
        .then(dataBack => {
            localStorage.removeItem('token')
            localStorage.removeItem('roles')
            navigate("/");
        })
        .catch(error => {
            console.error(error);
        });
    }, [navigate]);
}