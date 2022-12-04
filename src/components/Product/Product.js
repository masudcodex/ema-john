import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({handleAddToCart, product}) => {
    // const {handleAddToCart, product} = props;
    const {name, img, price, seller, ratings} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5>{name}</h5>
                <h6>Price: ${price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=>handleAddToCart(product)}>Add to Cart<span className='product-cart-icon'><FontAwesomeIcon icon={faCartPlus} /></span></button>
        </div>
    );
};

export default Product;