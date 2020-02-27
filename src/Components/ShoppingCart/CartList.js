import React from 'react';
import PropTypes from 'prop-types';

export default function CartList({ cart }) {
  const calculateTotal = () => {
    const total = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.total,
      0,
    );
    return total;
  };

  const totalPrice = calculateTotal();
  return (
    <div className="container-fluid">
      {cart.map(({ title, id, price, count, total }) => {
        return (
          <div
            className="row my-1 text-capitalize text-center cart-list-container"
            key={id}
          >
            <div className="col-10 mx-auto col-lg-2 cart-item">
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
}

CartList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
