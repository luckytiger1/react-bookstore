import { createSelector } from 'reselect';

const selectBookList = (state: any) => state.bookList;

const selectBookItems = createSelector(
  [selectBookList],
  (booksList) => booksList.books,
);
export default selectBookItems;
