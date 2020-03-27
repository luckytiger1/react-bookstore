import * as React from 'react';

type ItemInfoProps = {
  title: string;
  count: number;
  price: number;
  children: React.ReactNode;
};

const ItemInfo: React.FC<ItemInfoProps> = ({
  title,
  count,
  price,
  children,
}) => {
  return (
    <>
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
        <span className="d-lg-none">total: </span>${price * count}
      </div>
      <div className="col-10 mx-auto col-lg-2 cart-item">
        <span className="d-lg-none">action: </span>
        {children}
      </div>
    </>
  );
};

export default ItemInfo;
