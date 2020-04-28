import * as React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

type Props = {
  price: number;
};

const StripeButton: React.FC<Props> = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_hlrY1iK33lImxCVX7LvWyx2f00RNomIVEU';

  const onToken = (token: any) => {
    axios
      .post('/payment', {
        amount: priceForStripe,
        token,
      })
      .then((response) => {
        alert('Payment Successful!');
      })
      .catch((error) => {
        console.log('error is ', error);
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.',
        );
      });
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
