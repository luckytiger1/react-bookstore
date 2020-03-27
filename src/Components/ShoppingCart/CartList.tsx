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
import StripeButton from '../StripeButton/StripeButton';
import { BooksType } from '../../types/Books';

type CartListProps = {
  cartTotal: number;
  cart: object[];
  onIncrease: (item: BooksType) => void;
  onDecrease: (item: BooksType) => void;
  onDelete: (item: BooksType) => void;
};

const CartList: React.FC<CartListProps> = ({
  cartTotal,
  cart,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        const { title, id, price, count }: BooksType = item;
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
              <span className="d-lg-none">total: </span>${price * count}
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item">
              <span className="d-lg-none">action: </span>

              <button
                type="button"
                className="btn btn-success btn-sm mx-1"
                onClick={() => onIncrease(item)}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-warning btn-sm mx-1"
                onClick={() => onDecrease(item)}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm mx-1"
                onClick={() => onDelete(item)}
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
      <div className="float-right">
        <StripeButton price={cartTotal} />
      </div>
      <div className="mt-5 mb-4">
        Credit card number for testing: <b>4242 4242 4242 4242</b>/ CVC :
        <b> Any 3 digits</b> / Date : <b>Any future date</b>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
