import {
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART,
} from '../../types/actions';

const updateCartItems = (cartItems: any, item: any, indx: any) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, indx), ...cartItems.slice(indx + 1)];
  }
  if (indx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, indx), item, ...cartItems.slice(indx + 1)];
};
interface ItemTypes {
  id?: string;
  count?: null | number;
  title?: string;
  total?: number;
  price?: number;
}

const updateCartItem = (book: any, item: ItemTypes = {}, quantity: any) => {
  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0,
    price = book.price,
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    inCart: true,
    price,
    total: total + quantity * book.price,
  };
};

const calculateTotal = (cart: any) => {
  const cartTotal = cart.reduce(
    (accumulator: number, { total }: any) => accumulator + total,
    0,
  );
  return cartTotal;
};

const updateOrder = (state: any, bookId: any, quantity: any) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const index = cartItems.findIndex(({ id }: any) => id === bookId);
  const book = books.find((bookItem: any) => bookItem.id === bookId);
  const product = cartItems[index];
  const newItem = updateCartItem(book, product, quantity);

  const total = calculateTotal(cartItems);

  return {
    cartItems: updateCartItems(cartItems, newItem, index),
    orderTotal: total,
  };
};

const updateShoppingCart = (state: any, action: any) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case BOOK_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    case ALL_BOOKS_REMOVED_FROM_CART: {
      const {
        shoppingCart: { cartItems },
      } = state;
      const book = cartItems.find(({ id }: any) => id === action.payload);
      return updateOrder(state, action.payload, -book.count);
    }
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
