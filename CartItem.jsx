import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () =>
    cart.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.name} className="cart-card">
          <img src={item.img} alt={item.name} width="80" />
          <h3>{item.name}</h3>
          <p>Unit Price: ₹{item.cost}</p>
          <p>Total: ₹{item.cost * item.quantity}</p>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleDecrement(item)}>-</button>
          <button onClick={() => dispatch(removeItem(item.name))}>Delete</button>
        </div>
      ))}
      <h3>Total Cost: ₹{calculateTotalAmount()}</h3>
      <Link to="/products"><button>Continue Shopping</button></Link>
      <button onClick={handleCheckoutShopping}>Checkout</button>
    </div>
  );
}
