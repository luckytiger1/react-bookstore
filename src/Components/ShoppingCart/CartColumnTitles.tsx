import * as React from 'react';

const CartColumnTitles: React.FC = () => {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">book name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">action</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumnTitles;
