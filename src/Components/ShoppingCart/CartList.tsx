import * as React from 'react';
import CartItemButtons from './CartItemButtons';
import StripeButton from '../StripeButton/StripeButton';
import { BooksType } from '../../types/Books';
import ItemInfo from './ItemInfo';
import PaymentInfo from './PaymentInfo';

export type CartListProps = {
  cartTotal: number;
  cart: BooksType[];
  onIncrease: (item: BooksType) => void;
  onDecrease: (item: BooksType) => void;
  onDelete: (item: BooksType) => void;
};

const CartList: React.FC<CartListProps> = ({
  cart,
  onDecrease,
  onIncrease,
  onDelete,
  cartTotal,
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
            <ItemInfo title={title} price={price} count={count}>
              <CartItemButtons
                action={onIncrease}
                label="+"
                type="success"
                item={item}
              />
              <CartItemButtons
                action={onDecrease}
                label="-"
                type="warning"
                item={item}
              />
              <CartItemButtons
                action={onDelete}
                label="delete"
                type="danger"
                item={item}
              />
            </ItemInfo>
          </div>
        );
      })}
      <PaymentInfo cartTotal={cartTotal}>
        <StripeButton price={cartTotal} />
      </PaymentInfo>
    </div>
  );
};

export default CartList;
