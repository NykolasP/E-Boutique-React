import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';

export function DeleteProduct(){
    let {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3001/api/product/delete/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
            },
        })
        .then(response => response.json())
        .then(dataBack => {
            navigate('/admin/products');
        })
        .catch(error => {
            console.error(error);
        });
    }, [id,navigate]);
}