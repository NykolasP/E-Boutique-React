import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

export function ProductsA() {
    const [productsData, setProductsData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/api/product/productsA", {
          headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setProductsData(data)
            console.log(data)
        })
    }, [])
    return (
        <>
        <div style={{margin: "0px 5px"}}>
            <h2 style={{textAlign: "left"}}><Link to={`/admin/product/productadd`}>Ajout Produit</Link></h2>
            <table width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>reference</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th colSpan="2">Modification</th>
                    </tr>
                </thead>
                <tbody>
                    {productsData && productsData.map((elem, key) => 
                    <tr>
                        <td>{elem.id}</td>
                        <td>{elem.reference}</td>
                        <td>{elem.name}</td>
                        <td>{elem.price}€</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        
        </>
    )
}