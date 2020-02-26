import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBox from './SearchBox/SearchBox';
import BookItem from './BookItem/BookItem';
import Header from './Header/Header';
import booksList from './booksList';
import '../assets/styles/style.scss';
import ShoppingCart from './ShoppingCart/ShoppingCart';

function App() {
  const [count, setCount] = useState(0);
  const [term, setTerm] = useState('');
  const [books, setBooks] = useState([]);

  // Fetch mock data
  useEffect(() => {
    Promise.resolve(booksList).then((data) => {
      setBooks(data);
    });
  }, []);

  // Handle click on purchase button
  const handlePurchaseClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  // Handle click on search button
  const handleSearch = () => {
    const inputValue = document.querySelector('.search-input');
    setTerm(inputValue.value);
  };

  // Search by providing array of objects and search term
  const search = (items, searchTerm) => {
    if (searchTerm === '') {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  };

  const visibleData = search(books, term);

  console.log(visibleData);

  return (
    <>
      <Router>
        <Header count={count} />
        <Route
          exact
          path="/"
          render={() => (
            <>
              <SearchBox handleSearch={handleSearch} />
              <BookItem handleClick={handlePurchaseClick} books={visibleData} />
            </>
          )}
        />
        <Route path="/cart" component={ShoppingCart} />
      </Router>
    </>
  );
}

export default App;
