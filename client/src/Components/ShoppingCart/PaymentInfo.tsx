import * as React from 'react';

type PaymentInfoProps = {
  cartTotal: number;
  children: React.ReactNode;
};

const PaymentInfo: React.FC<PaymentInfoProps> = ({ cartTotal, children }) => {
  return (
    <>
      <div className="row my-1 text-capitalize text-center cart-list-container">
        <span
          className=" mx-auto col-lg-2 cart-item"
          style={{ marginTop: '20px' }}
        >
          Total Price: ${cartTotal}
        </span>
      </div>
      <div className="float-right">{children}</div>
      <div className="mt-5 mb-4">
        Credit card number for testing: <b>4242 4242 4242 4242</b>/ CVC :
        <b> Any 3 digits</b> / Date : <b>Any future date</b>
      </div>
    </>
  );
};

export default PaymentInfo;
