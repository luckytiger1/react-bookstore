import * as React from 'react';
import './BookList.scss';
import { connect } from 'react-redux';
import { compose, bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createStructuredSelector } from 'reselect';
import { fetchBooks, bookAddedToCart } from '../../redux/actions';
import withBookstoreService from '../hoc/with-bookstore-service';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import {
  selectIsBooksListLoading,
  selectIsErrorInBookList,
  selectFilteredBooks,
} from '../../redux/selectors/booksSelectors';
// import {
// firestore,
// convertCollectionsSnapshotToMap,
// } from '../../firebase/firebase.utils';
// import BookItem from '../BookItem/BookItem';

const BookItem = React.lazy(() => import('../BookItem/BookItem'));

interface BookItemProps {
  handleClick: (id: string) => void;
  error: null | ErrorEvent;
  loading: boolean;
  filteredBooks: object[];
  fetchBooksData: () => void;
}

const BookList = ({
  loading,
  handleClick,
  error,
  filteredBooks,
  fetchBooksData,
}: BookItemProps) => {
  React.useEffect(() => {
    // const collectionRef = firestore.collection('collections');
    // collectionRef.onSnapshot((snapshot) => {
    //   convertCollectionsSnapshotToMap(snapshot);
    // });
    fetchBooksData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <React.Suspense fallback={<Spinner />}>
      <BookItem books={filteredBooks} handleClick={handleClick} />
    </React.Suspense>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsBooksListLoading,
  error: selectIsErrorInBookList,
  filteredBooks: selectFilteredBooks,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      fetchBooksData: fetchBooks,
      handleClick: bookAddedToCart,
    },
    dispatch,
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
