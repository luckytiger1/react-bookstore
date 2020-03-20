import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_BOOKS } from './types/actions';
import { booksRequested, booksLoaded, booksFailed } from './actions/index';
import BookStoreService from './services/bookstore-service';

const bookstoreService = new BookStoreService();

async function fetchBooks() {
  const data = await bookstoreService.getBooks();
  return data;
}

function* sagaWorker() {
  yield put(booksRequested());
  try {
    const data = yield call(fetchBooks);
    yield put(booksLoaded(data));
  } catch (error) {
    yield put(booksFailed(error));
  }
}

export default function* sagaWatcher() {
  yield takeEvery(FETCH_BOOKS, sagaWorker);
}
