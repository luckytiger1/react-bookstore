import React, { useState, useEffect } from 'react';
import booksList from '../booksList';
import './BookItem.scss';

export default function BookItem() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Promise.resolve(booksList).then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <div className="books-container">
      {books.map((item, index) => {
        return (
          <div
            key={index.toString()}
            className="card book-item"
            style={{ width: '17rem' }}
          >
            <img src={item.cover} className="card-img-top" alt="cover" />
            <div className="card-body info-container">
              <h4 className="card-title book-title">{item.title}</h4>
              <p className="card-text">
                <strong>Author:</strong> {item.author}
              </p>
              <button type="button" className="btn btn-primary purchase-btn">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
