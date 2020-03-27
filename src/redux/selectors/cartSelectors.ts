import { createSelector } from 'reselect';
import { BooksType } from '../../types/Books';

const selectCart = (state: any) => state.shoppingCart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc: number, { count }: BooksType) => acc + count, 0),
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator: number, { price, count }: BooksType) =>
        accumulator + price * count,
      0,
    ),
);
