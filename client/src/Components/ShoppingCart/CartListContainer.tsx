import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from '../../redux/actions/index';
import {
  selectCartItemsTotal,
  selectCartItems,
} from '../../redux/selectors/cartSelectors';
import CartList, { CartListProps } from './CartList';

const CartListContainer: React.FC<CartListProps> = ({
  cartTotal,
  cart,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  return (
    <CartList
      cart={cart}
      cartTotal={cartTotal}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onDelete={onDelete}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
  cartTotal: selectCartItemsTotal,
});

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);
