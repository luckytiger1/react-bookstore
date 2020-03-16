const updateCartItems = (cartItems, item, indx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, indx), ...cartItems.slice(indx + 1)];
  }
  if (indx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, indx), item, ...cartItems.slice(indx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
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

const calculateTotal = (cart) => {
  const cartTotal = cart.reduce(
    (accumulator, { total }) => accumulator + total,
    0,
  );
  return cartTotal;
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const index = cartItems.findIndex(({ id }) => id === bookId);
  const book = books.find((bookItem) => bookItem.id === bookId);
  const product = cartItems[index];
  const newItem = updateCartItem(book, product, quantity);

  const total = calculateTotal(cartItems);

  return {
    cartItems: updateCartItems(cartItems, newItem, index),
    orderTotal: total,
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOKS_REMOVED_FROM_CART': {
      const {
        shoppingCart: { cartItems },
      } = state;
      const book = cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -book.count);
    }
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
