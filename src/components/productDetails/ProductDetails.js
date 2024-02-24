import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find (pd => pd.key === productKey)
    // console.log(product)
    return (
        <div>
            <h1>Your Product Details</h1>
            <Product ShowAddToCart ={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;