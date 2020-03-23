import { createSelector } from 'reselect';

const selectCart = (state: any) => state.shoppingCart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc: any, { count }: any) => acc + count, 0),
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator: number, { total }: any) => accumulator + total,
      0,
    ),
);
