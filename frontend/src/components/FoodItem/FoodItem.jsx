import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    console.log(price, description)

    const { addToCart, removeFromCart, cartItems } = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image}></img>
                {!cartItems[id] ? <img className='add' src={assets.add_icon_white} alt="" onClick={() => addToCart(id)} /> :
                    <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='' />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className='food-item-price'>Rs. {price}</p>
            </div>
        </div>
    )
}

export default FoodItem
