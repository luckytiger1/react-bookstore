import * as React from 'react';
import './BookList.scss';
import { connect } from 'react-redux';
import { compose, bindActionCreators, Dispatch, AnyAction } from 'redux';
import { fetchBooks, bookAddedToCart } from '../../redux/actions';
import withBookstoreService from '../hoc/with-bookstore-service';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import BookItem from '../BookItem/BookItem';

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
    fetchBooksData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookItem books={filteredBooks} handleClick={handleClick} />;
};

interface StateTypes {
  bookList: {
    books: object[];
    error: null | ErrorEvent;
    loading: boolean;
    filteredBooks: object[];
  };
}

const mapStateToProps = ({
  bookList: { books, loading, error, filteredBooks },
}: StateTypes) => {
  return { books, loading, error, filteredBooks };
};

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
