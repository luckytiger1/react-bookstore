import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
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
  const getItem = (id: string): object => {
    const book = books.find((item) => item.id === id);
    return book;
  };

  // Handle click on purchase button
  const handlePurchaseClick = (id: string): void => {
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
  const handleSearch = (): void => {
    const inputValue: HTMLInputElement = document.querySelector(
      '.search-input',
    );
    const { value } = inputValue;
    setTerm(value);
  };

  // Handle 'Enter' key down
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const inputValue: HTMLInputElement = document.querySelector(
      '.search-input',
    );
    if (e.key === 'Enter') {
      setTerm(inputValue.value);
    }
  };

  interface ItemTitle {
    title: string;
  }

  // Search by providing array of objects and search term
  const search = (items: object[], searchTerm: string) => {
    if (searchTerm === '') {
      return items;
    }
    return items.filter((item: ItemTitle) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
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

export default hot(module)(App);
