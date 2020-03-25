import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';
import { signInWithGoogle } from '../../redux/actions/index';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';
import selectCurrentUser from '../../redux/selectors/userSelectors';

export interface HeaderProps {
  itemCount: number;
  currentUser: any;
  signOutFromGoogle: (user: object | null) => void;
}

const Header = ({ itemCount, currentUser, signOutFromGoogle }: HeaderProps) => {
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
                My Cart: {itemCount} items
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  signOutFromGoogle: signInWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
