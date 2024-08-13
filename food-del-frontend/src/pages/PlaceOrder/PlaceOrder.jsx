import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "@/context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="Enter first name" />
          <input type="text" placeholder="Enter last name" />
        </div>
        <input type="text" placeholder="Enter email address" />
        <input type="text" placeholder="Enter street" />
        <div className="multi-fields">
          <input type="text" placeholder="Enter city" />
          <input type="text" placeholder="Enter state" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Enter zip code" />
          <input type="text" placeholder="Enter country" />
        </div>
        <input type="text" placeholder="Enter phone number" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2> Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
