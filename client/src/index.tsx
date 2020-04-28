import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './Components/App';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { BookStoreServiceProvider } from './Components/BookStoreServiceContext/book-store-service-context';
import BookStoreService from './services/bookstore-service';
// import { store, persistor } from './redux/configureStore';
import store from './redux/store';

const bookstoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookstoreService}>
        <Router>
          {/* <PersistGate persistor={persistor}> */}
          <App />
          {/* </PersistGate> */}
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,

  document.getElementById('root'),
);
