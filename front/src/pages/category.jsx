import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components/card';
import { CardContainer } from '../components/cardContainer';
import { CategoryCard } from "../components/categoryCard";
import { CategoryContainer } from "../components/categoryContainer";

export function Category() {
    let {id} = useParams();
    const [categoryData, setcategoryData] = useState();
    const [productCategoryData, setproductCategoryData] = useState();
    
    useEffect(() => {
        fetch("http://localhost:3001/api/category/category", {
          headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setcategoryData(data)
        })
    }, [])
    
    useEffect(() => {
        fetch(`http://localhost:3001/api/category/category/${id}`, {
        method: "GET",  
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setproductCategoryData(data)
        })
    }, [id])
    return (
        <>
        <CategoryContainer>
            {categoryData && categoryData.map((elem, key) => <CategoryCard key={key} obj={elem} />)}
        </CategoryContainer>
        <CardContainer>
            {productCategoryData && productCategoryData.map((elem, key) => <Card key={key} obj={elem} />)}
        </CardContainer>
        </>
    )
}