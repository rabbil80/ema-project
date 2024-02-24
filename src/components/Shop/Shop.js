import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../product/product';
import Cart from '../Cart/cart'

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const[product, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
           
                {
                    product.map(pd => <Product product={pd} ShowAddToCart={true} handleAddProduct = {handleAddProduct}></Product>)
                }
           
            </div>
              <div className="cart-container">
                 <Cart cart = {cart}></Cart>
                </div>   
            
        </div>
    );
};

export default Shop;