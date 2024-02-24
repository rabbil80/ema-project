import React from 'react';
import { Link } from 'react-router-dom';

const cart = (props) => {
   
    const cart = props.cart;
    const total = cart.reduce(( total, prd) => total + prd.price, 0)

    let shipping =0;
    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99;
    }else if (total > 0) {
        shipping = 12.99;
    }


    const tax = Math.round(total / 10);
    
    const grandTotal = total + shipping + tax
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product price: {total}</p>
            <p><small>Shpipping cost: {shipping}</small></p>
            <p><small>Tax: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            <Link to='/review'>
            <button className='button'>Review Order</button>
            </Link>
        </div>
    );
};

export default cart;