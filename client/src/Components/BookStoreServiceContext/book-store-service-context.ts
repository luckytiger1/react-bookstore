import * as React from 'react';

const {
  Provider: BookStoreServiceProvider,
  Consumer: BookStoreServiceConsumer,
} = React.createContext({});

export { BookStoreServiceProvider, BookStoreServiceConsumer };
