import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import SearchBox from './SearchBox/SearchBox';
import BookList from './BookList/BookList';
import Header from './Header/Header';
import '../assets/styles/style.scss';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import withBookstoreService from './hoc/with-bookstore-service';
import SignInAndSignUp from './SignInAndSignUp/SignInAndSignUp';

const App = () => {
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
        <Route path="/signin" render={() => <SignInAndSignUp />} />
      </Switch>
    </>
  );
};

export default hot(module)(withBookstoreService()(App));
