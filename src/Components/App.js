import React from 'react';

import '../assets/styles/style.scss';
import SearchBox from './SearchBox/SearchBox';
import BookItem from './BookItem/BookItem';

function App() {
  return (
    <div>
      <h1 className="store-title">Welcome to the Book Store</h1>
      <SearchBox />
      <BookItem />
    </div>
  );
}

export default App;
