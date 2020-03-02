import * as React from 'react';
import * as PropTypes from 'prop-types';
import './ShoppingCart.scss';
import CartColumnTitles from './CartColumnTitles';
import EmptyCart from './EmptyCart';
import CartList from './CartList';

export interface ShoppingCartProps {
  items: object[] | any[];
}

export default function ShoppingCart({ items }: ShoppingCartProps) {
  return (
    <div className="shopping-cart-container container">
      {items.length > 0 ? (
        <>
          <div className="text-center text-title">
            <h1 className="shopping-cart-title">Your Cart</h1>
          </div>
          <CartColumnTitles />
          <CartList cart={items[0]} />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
};
