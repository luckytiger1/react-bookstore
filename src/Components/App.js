import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import BookItem from './BookItem/BookItem';
import Header from './Header/Header';
import '../assets/styles/style.scss';

function App() {
  const [count, setCount] = useState(0);

  const handlePurchaseClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <Header count={count} />
      <SearchBox />
      <BookItem handleClick={handlePurchaseClick} />
    </div>
  );
}

export default App;
