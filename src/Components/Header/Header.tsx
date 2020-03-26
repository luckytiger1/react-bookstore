import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Header.scss';
import { signInWithGoogle } from '../../redux/actions/index';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';
import selectCurrentUser from '../../redux/selectors/userSelectors';
import SignInSignOutButton from '../SignInSignOutButton/SignInSignOutButton';
import MyCartButton from '../MyCartButton/MyCartButton';

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
        <SignInSignOutButton
          currentUser={currentUser}
          signOutFromGoogle={signOutFromGoogle}
        />
        <MyCartButton itemCount={itemCount} />
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
