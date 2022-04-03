import {useEffect, useState} from 'react';
import PaymentPageOffer from './PaymentPageOffer';
import PaymentPageSpecialOffer from './PaymentPageSpecialOffer';
import PaymentPageCheckout from './PaymentPageCheckout';

const PaymentPage = () => {

  return (
    <div class="flex flex-col">
      <PaymentPageOffer />
      <PaymentPageSpecialOffer />
      <PaymentPageCheckout />
    </div>
  );
}

export default PaymentPage;
