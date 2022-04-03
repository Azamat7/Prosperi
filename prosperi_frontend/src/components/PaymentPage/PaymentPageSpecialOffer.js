import {useEffect, useState, useContext} from 'react';
import { PriceContext } from '../../context/price';
import checkMark from '../../assets/check_mark.svg';
import star from '../../assets/star.svg';


const ProsperiBenefits = () => {
    return (
        <div class="hidden md:block">
            <p class="text-[34px] font-bold place-self-start md:pt-[60px]">Try Prosperi for 7 days, and you will:</p>
            <div class="flex flex-row items-center space-x-[6px] pt-5">
                <img src={checkMark} class="h-[25px] self-start" />
                <p class="text-xl font-normal">Know key investment terms and rules</p>
            </div>
            <div class="flex flex-row items-center space-x-[6px] pt-5">
                <img src={checkMark} class="h-[25px] self-start" />
                <p class="text-xl font-normal">Become an investor and buy your first stocks / crypto</p>
            </div>
            <div class="flex flex-row items-center space-x-[6px] pt-5">
                <img src={checkMark} class="h-[25px] self-start" />
                <p class="text-xl font-normal">Start generating additional income</p>
            </div>
        </div>
    );
}

const SpecialOffer = () => {
    const price = useContext(PriceContext);

    return (
        <div class="pt-8 md:pt-10">
            <div class="block rounded-[10px] shadow-lg font-primary">
                <div class="py-[5px] rounded-t-[10px] bg-offer text-white flex flex-col items-center">
                    <div class="flex flex-row items-center">
                        <span class="pb-1"><img src={star} class="h-4" /></span>
                        <p class="text-lg font-bold">SPECIAL OFFER</p>
                    </div>
                </div>
                <div class="pt-3 md:pt-6 pl-[21px] md:pl-[62px] pb-[13px] md:pb-[34px]">
                    <h5 class="text-sm md:text-lg font-medium pb-2">7-day trial for ${price}</h5>
                    <p class="font-normal opacity-50 text-xs md:text-sm italic">$19.99 billed monthly after the 1st week</p>
                </div>
            </div>
        </div>
    );
}

const StartTrialButton = () => {
    return (
        <div class="pt-4 lg:pt-10 flex flex-col items-center">
            <button class="rounded-lg bg-btn-primary text-white py-[11px] w-72 text-xl font-bold">Start my trial</button>
        </div>
    )
}

const PaymentPageSpecialOffer = () => {

  return (
    <div class="w-screen px-4 flex flex-col items-center font-primary">
        <div class="w-full md:w-[640px]">
            <ProsperiBenefits />
            <SpecialOffer />
            <StartTrialButton />
        </div>
    </div>
  );
}

export default PaymentPageSpecialOffer;
