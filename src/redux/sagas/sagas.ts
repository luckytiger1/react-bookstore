import { call, all } from 'redux-saga/effects';
import fetchBooksSaga from './books.sagas';
// import userSagas from './user.sagas';

// import BookStoreService from '../../services/bookstore-service';

// const bookstoreService = new BookStoreService();

export default function* rootSaga() {
  yield all([call(fetchBooksSaga)]);
}
