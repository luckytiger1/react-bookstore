import * as React from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.scss';
import { createStructuredSelector } from 'reselect';
import CartColumnTitles from './CartColumnTitles';
import EmptyCart from './EmptyCart';
import CartList from './CartListContainer';
import { selectCartItems } from '../../redux/selectors/cartSelectors';

export interface ShoppingCartProps {
  items: object[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items }) => {
  return (
    <div className="shopping-cart-container container">
      {items.length > 0 ? (
        <>
          <div className="text-center text-title">
            <h1 className="shopping-cart-title">Your Cart</h1>
          </div>
          <CartColumnTitles />
          <CartList />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default connect(mapStateToProps)(ShoppingCart);
