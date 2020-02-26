import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

export default function Header({ count }) {
  return (
    <div className="header container">
      <div className="store-title-container">
        <h1 className="store-title">Welcome to the Book Store</h1>
      </div>
      <div className="cart-container ">
        <div className="cart-btn-container">
          <button
            type="button"
            className="btn btn-outline-success view-cart-btn"
          >
            <img
              src="https://img.icons8.com/dusk/64/000000/shopping-cart.png"
              alt="cart"
            />
            <div className="cart-btn-container-title">
              My Cart: {count} items
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  count: PropTypes.number.isRequired,
};
