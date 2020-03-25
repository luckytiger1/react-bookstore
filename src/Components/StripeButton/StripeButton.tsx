import * as React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }: any) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_hlrY1iK33lImxCVX7LvWyx2f00RNomIVEU';

  const onToken = (token: any) => {
    console.log(token);
    alert('Payment Successful!');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Book Store"
      billingAddress
      shippingAddress
      image="https://img.icons8.com/cute-clipart/128/000000/book.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeButton;
