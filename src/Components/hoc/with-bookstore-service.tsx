import * as React from 'react';
import { BookStoreServiceConsumer } from '../BookStoreServiceContext/book-store-service-context';

const withBookstoreService = () => (Wrapped: React.FC) => {
  return (props: any) => {
    return (
      <BookStoreServiceConsumer>
        {(bookstoreService) => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookStoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
