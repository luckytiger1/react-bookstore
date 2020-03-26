import { createSelector } from 'reselect';

const selectBookList = (state: any) => state.bookList;

export const selectBookItems = createSelector(
  [selectBookList],
  (booksList) => booksList.books,
);

export const selectIsBooksListLoading = createSelector(
  [selectBookList],
  (bookList) => bookList.loading,
);

export const selectIsErrorInBookList = createSelector(
  [selectBookList],
  (bookList) => bookList.error,
);

export const selectFilteredBooks = createSelector(
  [selectBookList],
  (bookList) => bookList.filteredBooks,
);
