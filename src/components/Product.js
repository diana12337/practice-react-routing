import React from 'react';
import {Link, Route, useParams} from 'react-router-dom'
import products from './../products.json'



const Product= () =>{
    const { id} = useParams();
    
    const productToShow = products.filter(item => item.id === Number(id))
    
    const {name, description, category, price} = productToShow[0]
  
    return (
        <>
        <h2>Products</h2>
       <p>Name: {name}</p>
       <p>Description: {description}</p>
       <p>Category: {category}</p>
       <p>Price: {price}</p>
        </>
    )
}

export default Product;