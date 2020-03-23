import { BooksType } from '../types/Books';
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  FILTER_BOOKS,
} from '../types/actions';

const filter = (items: BooksType[], searchTerm: string) => {
  if (searchTerm === '') {
    return items;
  }
  return items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};

export interface UpdateBookListState {
  books: undefined | BooksType[];
  loading: boolean;
  error: null | Error;
  filteredBooks?: BooksType[];
}

const updateBookList = (state: any, action: any) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
      filteredBooks: [],
    };
  }
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loading: true,
        error: null,
        filteredBooks: [],
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        filteredBooks: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_BOOKS_FAILED:
      return {
        books: [],
        filteredBooks: [],
        loading: false,
        error: action.payload,
      };

    case FILTER_BOOKS: {
      const visibleData = filter(state.bookList.books, action.payload);
      return {
        ...state.bookList,
        filteredBooks: visibleData,
      };
    }
    default:
      return state.bookList;
  }
};

export default updateBookList;
