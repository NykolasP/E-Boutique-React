import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

export function Product() {
    let {id} = useParams();
    const [productsData, setProductsData] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3001/api/product/product/${id}`, {
        method: "GET",  
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setProductsData(data)
        })
    }, [id]);

    return (
        <>
        {productsData && 
        <div style={{margin:"10px 30px"}}>
            <h1 style={{textAlign:"left"}}>{productsData.name}</h1>
            <h2 style={{textAlign:"left"}}><b>Prix</b> : {productsData.price}€</h2>
            <div style={{textAlign:"left"}}><b>Resume</b> :</div>
            <p style={{textAlign:"left"}}>{productsData.resume}</p>
            <div style={{textAlign:"left"}}><b>Description</b> :</div>
            <p style={{textAlign:"left"}}>{productsData.description}</p>
        </div>
        }
        </>
    )
}