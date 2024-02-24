import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';
import { Link } from 'react-router-dom';

const product = (props) => {
   console.log(props)
    const {img, name, seller, price, stock, key} = props.product;

  
    
    return (
        <div className='product'>
           <div>
                <img src={img} alt=""/>
           </div>

           <div>
           <h4 className='product-name'><Link to= {"/product/"+key}> {name}</Link></h4>
           <br />
           <p> <small>By: {seller}</small></p>
           <p>${price}</p>
            <br />
           <p><small>Only{stock} left in stock order soon</small></p>
          { props.ShowAddToCart && <button 

          className='button' 
          onClick={ () => props.handleAddProduct(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} />add to cart
          
          </button>}
           </div>
            
        </div>
    );
};

export default product;