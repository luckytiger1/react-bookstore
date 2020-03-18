/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';

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

it('renders user data', async () => {
  const fakeBooks = [
    {
      id: uuidv4(),
      title: 'Ulysses',
      author: 'James Joyce',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/51h6FygcbxL._SL160_.jpg',
      price: 23,
      inCart: false,
      count: 0,
      total: 0,
    },
  ];
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeBooks),
    }),
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<BookList />, container);
  });

  expect(container.textContent).toContain(fakeBooks[0].author);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockClear();
  delete global.fetch;
});
