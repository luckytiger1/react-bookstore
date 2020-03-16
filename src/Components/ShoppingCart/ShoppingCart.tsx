import * as React from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.scss';
import CartColumnTitles from './CartColumnTitles';
import EmptyCart from './EmptyCart';
import CartList from './CartList';

export interface ShoppingCartProps {
  items: object[] | any[];
}

const ShoppingCart = ({ items }: ShoppingCartProps) => {
  // console.log(items);

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

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    items: cartItems,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
