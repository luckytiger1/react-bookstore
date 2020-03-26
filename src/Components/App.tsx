import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './Header/Header';
import '../assets/styles/style.scss';
import withBookstoreService from './hoc/with-bookstore-service';
import selectCurrentUser from '../redux/selectors/userSelectors';
import Spinner from './Spinner/Spinner';
import {
  createUserProfileDocument,
  auth,
  addCollectionAndDocuments,
} from '../firebase/firebase.utils';
import { signInWithGoogle } from '../redux/actions';

import selectBookItems from '../redux/selectors/booksSelectors';

const SearchBox = React.lazy(() => import('./SearchBox/SearchBox'));
const BookList = React.lazy(() => import('./BookList/BookList'));
const SignInAndSignUp = React.lazy(() =>
  import('./SignInAndSignUp/SignInAndSignUp'),
);
const ShoppingCart = React.lazy(() => import('./ShoppingCart/ShoppingCart'));

const App = ({ currentUser, googleSignIn, collectionsArray }: any) => {
  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, null);

        userRef.onSnapshot((snapShot: any) => {
          googleSignIn({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      addCollectionAndDocuments('collections', collectionsArray);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [googleSignIn, collectionsArray]);
  return (
    <>
      {/* Add route to main page and cart page */}
      <Header />
      <React.Suspense fallback={<Spinner />}>
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
      </React.Suspense>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectBookItems,
});

const mapDispatchToProps = {
  googleSignIn: signInWithGoogle,
};

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(withBookstoreService()(App)),
);
