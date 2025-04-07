import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='placeorder'>
      <div className='placeorder-left'>
        <h2>Delivery Information</h2>
        <form className='placeorder-form'>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Street Address" />
          <div className="placeorder-form-row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="placeorder-form-row">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone Number" />
        </form>
      </div>
      <div className='placeorder-right'>
        <h2>Order Summary</h2>
        <div className="placeorder-summary">
          {food_list.map((item, index) => {
            if (cartItems[item._id]) {
              return (
                <div className='placeorder-summary-item' key={index}>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>x{cartItems[item._id]}</p>
                  <p>Rs. {item.price * cartItems[item._id]}</p>
                </div>
              );
            }
            return null;
          })}
          <hr />
          <div className="placeorder-summary-total">
            <p>Subtotal:</p>
            <p>Rs. {getTotalCartAmount()}</p>
          </div>
          <div className="placeorder-summary-total">
            <p>Delivery:</p>
            <p>Rs.{getTotalCartAmount() === 0 ? 0 : 20}</p>
          </div>
          <div className="placeorder-summary-total">
            <b>Total:</b>
            <b>Rs. {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
