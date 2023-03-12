import React, {useEffect,useState} from 'react';
import { Card } from "../components/card";
import { CardContainer } from "../components/cardContainer";
import MainFeaturedPost from "../components/carrousel";

const mainFeaturedPost = {
    title: 'Bienvenue sur notre boutique',
    description:
      "Vennez trouver ce dont vous avez besoin !",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Cliquer Ici',
  };

export function Home() {
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
        <MainFeaturedPost post={mainFeaturedPost} />
        <CardContainer>
            {productsData && productsData.map((elem, key) => <Card key={key} obj={elem} />)}
        </CardContainer>
        </>
    )
}