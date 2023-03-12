import React, {useEffect,useState} from 'react';
import { Card } from "../components/card";
import { CardContainer } from "../components/cardContainer";

export function Products() {
    const [productsData, setProductsData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/api/product/products", {
          headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setProductsData(data)
        })
    }, [])
    return (
        <>
        <CardContainer>
            {productsData && productsData.map((elem, key) => <Card key={key} obj={elem} />)}
        </CardContainer>
        </>
    )
}