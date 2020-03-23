import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import SearchBox from './SearchBox/SearchBox';
import BookList from './BookList/BookList';
import Header from './Header/Header';
import '../assets/styles/style.scss';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import withBookstoreService from './hoc/with-bookstore-service';
import SignInAndSignUp from './SignInAndSignUp/SignInAndSignUp';

const App = ({ currentUser }: any) => {
  return (
    <>
      {/* Add route to main page and cart page */}
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <SearchBox />
              <BookList />
            </>
          )}
        />
        <Route path="/cart" render={() => <ShoppingCart />} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ auth: { currentUser } }: any) => {
  return {
    currentUser,
  };
};

export default hot(module)(
  connect(mapStateToProps)(withBookstoreService()(App)),
);
