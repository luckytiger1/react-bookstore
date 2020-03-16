import * as React from 'react';

export interface ItemValue {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  inCart: boolean;
  count: number;
  total: number;
}

interface BookItemProps {
  books: object[];
  handleClick: (id: string) => void;
}

const BookItem = ({ books, handleClick }: BookItemProps) => {
  return (
    <div>
      <div className="books-container container">
        {books.map((item: ItemValue) => (
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
        ))}
      </div>
    </div>
  );
};

export default BookItem;
