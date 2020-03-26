import * as React from 'react';
import { Link } from 'react-router-dom';

const MyCartButton = ({ itemCount }: any) => {
  return (
    <div className="cart-btn-container">
      <Link to="/cart">
        <button type="button" className="btn btn-outline-success view-cart-btn">
          <img
            src="https://img.icons8.com/dusk/64/000000/shopping-cart.png"
            alt="cart"
          />
          <div className="cart-btn-container-title">
            My Cart: {itemCount} items
          </div>
        </button>
      </Link>
    </div>
  );
};
export default MyCartButton;
