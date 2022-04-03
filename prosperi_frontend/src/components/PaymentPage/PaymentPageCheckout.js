import paymentMethods from '../../assets/payment_methods.svg';


const PaymentMethods = () => {
    return (
        <div class="pt-2 flex flex-col items-center">
            <img src={paymentMethods} class="self-start w-full h-[52px]" />
        </div>
    );
}

const PaymentPageCheckout = () => {

  return (
    <div class="w-screen px-4 flex flex-col items-center font-primary">
        <div class="w-full md:w-[640px]">
            <div class="flex flex-col items-center pt-4 md:pt-5 font-primary text-base">
                <span class="inline-block">Guaranteed <p class="font-bold inline">Safe</p> Checkout</span>
            </div>
            <PaymentMethods />
            <div class="flex flex-col items-center text-center pt-1 pb-8">
                <p class="text-[9px] md:text-xs opacity-50 w-72">By continuing I agree with Terms of Service, Privacy Policy, Money-Back Policy, Subscription terms, Cookie policy</p>
            </div>
        </div>
    </div>
  );
}

export default PaymentPageCheckout;
