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
  const [cart, setCart] = useState([]);

  // Fetch mock data
  useEffect(() => {
    Promise.resolve(booksList).then((data) => {
      setBooks(data);
    });
  }, []);

  // Get book by passing id
  const getItem = (id) => {
    const book = books.find((item) => item.id === id);
    return book;
  };

  // Handle click on purchase button
  const handlePurchaseClick = (id) => {
    setCount(count + 1);
    const tempProducts = [...books];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count += 1;
    product.total = product.price * product.count;
    setBooks(tempProducts);
    setCart([books.filter((el) => el.inCart)]);
  };

  // Handle click on search button
  const handleSearch = () => {
    const inputValue = document.querySelector('.search-input');
    setTerm(inputValue.value);
  };

  // Handle 'Enter' key down
  const handleEnterKey = (e) => {
    const inputValue = document.querySelector('.search-input');
    if (e.key === 'Enter') {
      setTerm(inputValue.value);
    }
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

  // Filtered data
  const visibleData = search(books, term);

  return (
    <>
      {/* Add route to main page and cart page */}
      <Router>
        <Header count={count} />
        <Route
          exact
          path="/"
          render={() => (
            <>
              <SearchBox
                handleSearch={handleSearch}
                handleEnterKey={handleEnterKey}
              />
              <BookItem handleClick={handlePurchaseClick} books={visibleData} />
            </>
          )}
        />
        <Route path="/cart" render={() => <ShoppingCart items={cart} />} />
      </Router>
    </>
  );
}

export default App;
