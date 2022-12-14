import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveItem}) => {
    const {id, name, price, quantity, shipping, img} = product;
    return (
        <div className='review-item'>
           <div className='review-img'>
                <img src={img} alt="" />
           </div>
           <div className="review-details-container">
            <div className="review-details">
                <p>{name}</p>
                <p>Price: <small>{price}</small></p>
                <p>Shipping: <small>{shipping}</small></p>
                <p>Quantity: <small>{quantity}</small></p>
            </div>
            <div className="delete-container">
                <button className='button-delete'>
                    <FontAwesomeIcon onClick={()=>handleRemoveItem(id)} className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                </button>
            </div>
           </div>
        </div>
    );
};

export default ReviewItem;