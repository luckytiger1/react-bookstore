import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/App';
import store from './store';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { BookStoreServiceProvider } from './Components/BookStoreServiceContext/book-store-service-context';
import BookStoreService from './services/bookstore-service';

const bookstoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,

  document.getElementById('root'),
);
