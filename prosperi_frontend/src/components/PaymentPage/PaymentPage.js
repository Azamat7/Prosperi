import {useEffect, useState} from 'react';
import PaymentPageOffer from './PaymentPageOffer';
import PaymentPageSpecialOffer from './PaymentPageSpecialOffer';
import PaymentPageCheckout from './PaymentPageCheckout';

const PaymentPage = () => {

  return (
    <div class="flex flex-col">
      <div class="">
        <PaymentPageOffer />
      </div>
      <div class="">
        <PaymentPageSpecialOffer />
      </div>
      <div class="">
        <PaymentPageCheckout />
      </div>
    </div>
  );
}

export default PaymentPage;
