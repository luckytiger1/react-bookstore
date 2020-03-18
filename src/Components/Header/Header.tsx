import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { connect } from 'react-redux';
import { BooksType } from '../../types/Books';

export interface HeaderProps {
  cart: BooksType[];
}

const Header = ({ cart }: HeaderProps) => {
  return (
    <div className="header container">
      <div className="store-title-container">
        <Link to="/">
          <h1 className="store-title">Welcome to the Book Store</h1>
        </Link>
      </div>
      <div className="cart-container ">
        <div className="cart-btn-container">
          <Link to="/cart">
            <button
              type="button"
              className="btn btn-outline-success view-cart-btn"
            >
              <img
                src="https://img.icons8.com/dusk/64/000000/shopping-cart.png"
                alt="cart"
              />
              <div className="cart-btn-container-title">
                My Cart: {cart.reduce((acc, { count }) => acc + count, 0)} items
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }: any) => {
  return {
    cart: cartItems,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(Header);
