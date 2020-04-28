/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with correct author name and price', () => {
  const book = [
    {
      id: uuidv4(),
      title: 'Madame Bovary',
      author: 'Gustave Flaubert',
      cover: 'http://ecx.images-amazon.com/images/I/51o5dnjk07L._SL160_.jpg',
      price: 29,
      inCart: false,
      count: 0,
      total: 0,
    },
  ];

  act(() => {
    render(<BookItem books={book} />, container);
  });
  expect(container.querySelector('.card-text').textContent).toBe(
    `Author: ${book[0].author}`,
  );
  expect(container.querySelector('.price-container').textContent).toBe(
    `Price: $${book[0].price}`,
  );
});
