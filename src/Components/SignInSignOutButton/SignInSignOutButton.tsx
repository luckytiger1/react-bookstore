import * as React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

export default function SignInSignOutButton({
  currentUser,
  signOutFromGoogle,
}: any) {
  return (
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
  );
}
