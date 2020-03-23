import * as React from 'react';
import { connect } from 'react-redux';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from '../../redux/actions/index';
import { selectCartItemsTotal } from '../../redux/selectors/cartSelectors';

export interface CartListProps {
  cartTotal: number;
  cart: object[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onDelete: (id: string) => void;
}

const CartList = ({
  cartTotal,
  cart,
  onIncrease,
  onDecrease,
  onDelete,
}: CartListProps) => {
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        const { title, id, price, count, total }: any = item;
        return (
          <div
            className="row my-1 text-capitalize text-center cart-list-container"
            key={id}
          >
            <div className="col-10 mx-auto col-lg-2 cart-item" key={id}>
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
          Total Price: ${cartTotal}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log('working');

  return {
    cart: state.shoppingCart.cartItems,
    cartTotal: selectCartItemsTotal(state),
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
