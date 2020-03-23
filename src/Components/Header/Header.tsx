import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';
import { BooksType } from '../../types/Books';
import { signInWithGoogle } from '../../actions/index';

export interface HeaderProps {
  cart: BooksType[];
  currentUser: any;
  signOutFromGoogle: (user: object | null) => void;
}

const Header = ({ cart, currentUser, signOutFromGoogle }: HeaderProps) => {
  return (
    <div className="header container">
      <div className="store-title-container">
        <Link to="/">
          <h1 className="store-title">Welcome to the Book Store</h1>
        </Link>
      </div>
      <div className="cart-container d-flex">
        <div className="cart-btn-container">
          {currentUser ? (
            <button
              type="button"
              className="btn btn-outline-success view-cart-btn"
              onClick={() => {
                signOutFromGoogle(null);
                auth.signOut();
              }}
            >
              <div className="cart-btn-container-title">SIGN OUT</div>
            </button>
          ) : (
            <Link to="/signin">
              <button
                type="button"
                className="btn btn-outline-success view-cart-btn"
              >
                <div className="cart-btn-container-title">SIGN IN</div>
              </button>
            </Link>
          )}
        </div>
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

const mapStateToProps = ({
  shoppingCart: { cartItems, orderTotal },
  auth: { currentUser },
}: any) => {
  return {
    cart: cartItems,
    total: orderTotal,
    currentUser,
  };
};

const mapDispatchToProps = {
  signOutFromGoogle: signInWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
