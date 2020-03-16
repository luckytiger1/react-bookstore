import * as React from 'react';
import { connect } from 'react-redux';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from '../../actions/index';
import { ItemValue } from '../BookList/BookList';

export interface CartListProps {
  cart: object[];
  total: number;
}

interface TotalValue {
  total: number;
}

const CartList = ({
  cart,
  orderTotal,
  onIncrease,
  onDecrease,
  onDelete,
}: CartListProps) => {
  const calculateTotal = () => {
    const cartTotal = cart.reduce(
      (accumulator: number, { total }: TotalValue) => accumulator + total,
      0,
    );
    return cartTotal;
  };
  const totalPrice = calculateTotal();

  console.log(cart);
  return (
    <div className="container-fluid">
      {cart.map((item, i) => {
        const { title, id, price, count, total } = item;
        return (
          <div
            className="row my-1 text-capitalize text-center cart-list-container"
            key={id}
          >
            <div className="col-10 mx-auto col-lg-2 cart-item" key={i}>
              <span className="d-lg-none">product: </span>
              {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item">
              <span className="d-lg-none">price: </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item">
              <span className="d-lg-none">quantity: </span>
              {count}
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item">
              <span className="d-lg-none">total: </span>${total}
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item">
              <span className="d-lg-none">action: </span>

              <button
                type="button"
                className="btn btn-success btn-sm mx-1"
                onClick={() => onIncrease(id)}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-warning btn-sm mx-1"
                onClick={() => onDecrease(id)}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm mx-1"
                onClick={() => onDelete(id)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
      <div className="row my-1 text-capitalize text-center cart-list-container">
        <span
          className=" mx-auto col-lg-2 cart-item"
          style={{ marginTop: '20px' }}
        >
          Total Price: ${totalPrice}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    cart: cartItems,
    orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
