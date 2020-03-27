import { BooksType } from '../../types/Books';
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  FILTER_BOOKS,
  AppActions,
} from '../../types/actions';

const filter = (items: BooksType[], searchTerm: string) => {
  if (searchTerm === '') {
    return items;
  }
  return items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};

type UpdateBookListState = {
  books: undefined[] | BooksType[];
  loading: boolean;
  error: null | Error;
  filteredBooks?: BooksType[];
};

const initialState: UpdateBookListState = {
  books: [],
  loading: true,
  error: null,
  filteredBooks: [],
};

const updateBookList = (
  state = initialState,
  action: AppActions,
): UpdateBookListState => {
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
      const visibleData = filter(state.books, action.payload);
      return {
        ...state,
        filteredBooks: visibleData,
      };
    }
    default:
      return state;
  }
};

export default updateBookList;
