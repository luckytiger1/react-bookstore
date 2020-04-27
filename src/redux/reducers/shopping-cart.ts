import {
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART,
  AppActions,
  CLEAR_CART,
} from '../../types/actions';
import { BooksType } from '../../types/Books';

const addItemsToCart = (cartItems: BooksType[], cartItemToAdd: BooksType) => {
  const existingCartItem = cartItems.find(
    (cartItem: BooksType) => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            count: cartItem.count + 1,
          }
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, count: 1 }];
};

const removeItemFromCart = (
  cartItems: BooksType[],
  cartItemToRemove: BooksType,
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem.count === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, count: cartItem.count - 1 }
      : cartItem,
  );
};
// type UpdateShoppingCartState = {
//   cartItems: BooksType[] | undefined;
//   orderTotal: number;
// };

const initialState: any = {
  cartItems: [],
};

const updateShoppingCart = (state = initialState, action: AppActions): any => {
  switch (action.type) {
    case BOOK_ADDED_TO_CART:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case BOOK_REMOVED_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case ALL_BOOKS_REMOVED_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: BooksType) => cartItem.id !== action.payload.id,
        ),
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default updateShoppingCart;
