import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const { cartItems, food_list, removeFromCart } = useContext(StoreContext)



  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <>
                <div className='cart-items-title cart-items-item' key={index}>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs. {item.price * cartItems[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart
