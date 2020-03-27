import * as React from 'react';
import { BooksType } from '../../types/Books';

type CartItemButtonsProps = {
  action: (item: BooksType) => void;
  label: string;
  type: string;
  item: BooksType;
};

const CartItemButtons: React.FC<CartItemButtonsProps> = ({
  action,
  label,
  type,
  item,
}) => {
  return (
    <button
      type="button"
      className={`btn btn-${type} btn-sm mx-1`}
      onClick={() => action(item)}
    >
      {label}
    </button>
  );
};

export default CartItemButtons;
