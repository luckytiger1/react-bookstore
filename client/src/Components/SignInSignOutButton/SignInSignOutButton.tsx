import * as React from 'react';
import { Link } from 'react-router-dom';

export type SignInSignOutButtonProps = {
  currentUser: object | null;
  userSignOutStart: () => void;
};

const SignInSignOutButton: React.FC<SignInSignOutButtonProps> = ({
  currentUser,
  userSignOutStart,
}) => {
  return (
    <div className="cart-btn-container">
      {currentUser ? (
        <button
          type="button"
          className="btn btn-outline-success view-cart-btn"
          onClick={userSignOutStart}
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
};

export default SignInSignOutButton;
