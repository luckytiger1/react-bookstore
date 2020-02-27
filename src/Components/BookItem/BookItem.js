import React from 'react';
import PropTypes from 'prop-types';
import './BookItem.scss';

export default function BookItem({ handleClick, books }) {
  return (
    <div className="books-container container">
      {books.map((item) => {
        return (
          <div
            key={item.id}
            className="card book-item"
            style={{ width: '17rem' }}
          >
            <img src={item.cover} className="card-img-top" alt="cover" />
            <div className="card-body info-container">
              <h4 className="card-title book-title">{item.title}</h4>
              <p className="card-text">
                <strong>Author:</strong> {item.author}
              </p>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
              <button
                onClick={() => handleClick(item.id)}
                type="button"
                className="btn btn-primary purchase-btn"
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

BookItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
