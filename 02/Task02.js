import React from 'react';
import {Route, Link} from 'react-router-dom'
import Product from '../src/components/Product';
import products from '../src/products.json'

const Task02 = () => {
    const list = products.map(item=> (
        <li key={item.id}>
            <Link to={`/task02/product-${item.id}`}>
            {item.name}
            </Link>
        </li>   
         ));

         
    return ( <>
        <h1>Task02</h1>
        {list}
        <Route path="/task02/product-:id">
<Product />
        </Route>
        </>
    );
}

export default Task02;

